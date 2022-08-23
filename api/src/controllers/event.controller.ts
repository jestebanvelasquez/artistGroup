import { PrismaClient } from '@prisma/client';
import { Response, Request, NextFunction } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });


const eventController = {
    getAll: async (_req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const events = await prisma.eventos.findMany({
            include: {
                artista: true
            }
        });
        if (events.length > 0) {
            return res.status(200).json(events);
        }
        return res.status(500).json({ message: 'No se encontraron resultados' });
    },
    create: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const {id} = req.params
        const {name, description, lugar, imagesEvent,duration,price,tiempo  } = req.body
        try {
            
            const event = await prisma.eventos.create({
                data: {
                    name,
                    description,
                    duration,
                    imagesEvent,
                    lugar,
                    price,
                    tiempo,
                    artista:{
                        connect:{
                            idUsuario: id
                        }
                    }
                    
                }

            });

            res.status(200).json({data:event})
        } catch (error) {
            res.status(400).json({message:error, saludo:'hola'})
        }

            
    }
}

// name        String   @db.VarChar(255)
// description String   @db.VarChar(500)
// lugar       String   @db.VarChar(255)
// imagesEvent String[]
// duration    Float    @db.Real
// isActive    Boolean  @default(false)
// price       Float    @db.Real
// tiempo

export default eventController;