import { PrismaClient } from '@prisma/client';
import { Response, Request, NextFunction } from 'express';
import { transporter } from '../config/mailer';

const prisma = new PrismaClient({ log: ['query', 'info'] });
import { stripe } from '../app';

const paymentController = {
    getPayment: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { idComprador, idEvento, direccion, correoComprador, correoVendedor, amount, token } = req.body;
        try {
            await stripe.charges.create({
                source: token.id,
                amount,
                currency: 'usd',
            }).then((responseStripe: object) => {
                return prisma.compras.create({
                    data: {
                        code: responseStripe
                    }
                });
            }).then(responseCompra => {
                return prisma.eventosCompras.create({
                    data: {
                        idEvento,
                        idCompra: responseCompra.id
                    }
                })
            });
            await prisma.usuarioEventos.create({
                data: {
                    userId: idComprador,
                    idEvento,
                    direccion: direccion
                }
            });
            // send mail with defined transport object
            await transporter.sendMail({
                from: '"Se ha comprado un evento satisfactoriamente" <artistapp.com>', // sender address
                to: `${correoComprador}, ${correoVendedor}`, // puedo agregar varios correos separados por comas...
                subject: "Se ha realizado una compra exitosamente ✔", // Subtítulo del correo
                //text: "Hello world?", // plain text body
                html: `<b>La persona con correo, <i>${correoComprador}</i> ha generado una compra en la plataforma de ArtistApp, en este caso el artista con correo ${correoVendedor} deberá de contactarse con el comprador para acordar la realización del evento, él evento se realizará en la dirección: ${direccion}. El costo del evento fue de: ${amount}.</b>`, // html body
            });

            res.status(200).send('Se ha realizado el pago exitosamente, revisa tu correo electrónico');
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}

export default paymentController;