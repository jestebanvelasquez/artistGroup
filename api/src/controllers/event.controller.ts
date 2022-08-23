import { PrismaClient } from '@prisma/client';
import { Response, Request, NextFunction } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

const eventController = {
    getAll: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { idArtist } = req.query;
        try {
            if (idArtist) {
                const events = await prisma.eventos.findMany({
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        lugar: true,
                        imagesEvent: true,
                        duration: true,
                        isActive: true,
                        price: true,
                        tiempo: true,
                        artistaId: true,
                        eventosCategorias: {
                            select: {
                                categorias: {
                                    select: {
                                        id: true,
                                        name: true
                                    }
                                }
                            }
                        }
                    },
                    where: { artistaId: `${idArtist}` }
                });
                if (events.length > 0) {
                    return res.status(200).json(events);
                } else {
                    return 'No se encontraron eventos vinculados al artista';
                }
            } else {
                const events = await prisma.eventos.findMany({
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        lugar: true,
                        imagesEvent: true,
                        duration: true,
                        isActive: true,
                        price: true,
                        tiempo: true,
                        artista: {
                            select: {
                                id: true,
                                name: true,
                                descripcion: true,
                                img: true,
                                usuario: {
                                    select: {
                                        id: true,
                                        email: true,
                                        isAvaliable: true,
                                        persona: {
                                            select: {
                                                id: true,
                                                name: true,
                                                lastname: true,
                                                city: true,
                                                country: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
                if (events.length > 0) {
                    return res.status(200).json(events);
                } else {
                    throw 'No se encontraron resultados';
                }
            }
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}

export default eventController;