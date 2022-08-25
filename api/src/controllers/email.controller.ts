import { Response, Request, NextFunction } from 'express';
import { transporter } from '../config/mailer';

const emailController = {
    sendEmail: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { email } = req.body;
        try {
            // send mail with defined transport object
            await transporter.sendMail({
                from: '"Título del correo" <artistapp.com>', // sender address
                to: `${email}`, // puedo agregar varios correos separados por comas...
                subject: "Hello ✔", // Subtítulo del correo
                //text: "Hello world?", // plain text body
                html: "<b>Hello world, <i>Esto es un mensaje de prueba hecho con html</i></b>", // html body
            });
            res.status(200).send('Se ha enviado el correo electrónico exitosamente');
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}

export default emailController;