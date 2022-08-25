import { PrismaClient } from '@prisma/client';
import { Response, Request, NextFunction } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

const eventController = {
    getAll: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { idArtist, id } = req.query;
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
            } else if (id) {
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
                    },
                    where: {
                        id: `${id}`,
                        isActive: true
                    }
                });
                if (events.length > 0) {
                    return res.status(200).json(events);
                } else {
                    throw 'El evento seleccionado no existe';
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
                                img: true
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
    },
    create: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { name, description, lugar, imagesEvent, duration, price, tiempo, artistaId } = req.body;
        try {
            const createEvent = await prisma.eventos.create({
                data: {
                    name,
                    description,
                    lugar,
                    imagesEvent,
                    duration,
                    isActive: true,
                    price,
                    tiempo,
                    artistaId
                }
            });
            if (!createEvent) {
                throw 'Ocurrió un problema al crear el evento';
            }
            res.status(201).json(createEvent);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    },
    deshabilitar: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { idEvento, status } = req.body;
        try {
            const deshabilitarEvento = await prisma.eventos.update({
                where: { id: idEvento },
                data: { isActive: status },
            });
            if (!deshabilitarEvento) {
                throw 'Ocurrió un problema al deshabilitar el evento';
            }
            res.status(200).json(deshabilitarEvento);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    },
    /* availabilityEvent: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { q } = req.query;
        console.log(q);
        let fecha = new Date(`${q}`).getDate();
        console.log(fecha);
        const verifyavailability = await prisma.usuarioEventos.findMany({
        where:{ 
            fechaEvento: {
                equals: fecha
            }
        }
        });
        res.status(200).json(verifyavailability);
    } */
}

export default eventController;