import { PrismaClient } from '@prisma/client';
import { Response, Request, NextFunction } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

const categoriesController = {
    getAll: async (_req: Request, res: Response, _next: NextFunction) => {
        try {
            const categories = await prisma.categorias.findMany();
            if (categories.length === 0) {
                throw 'No se encontraron resultados';
            }
            res.status(200).send(categories);
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    create: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { name } = req.body;
        try {
            const validateCategory = await prisma.categorias.findMany({
                where: {
                    name
                }
            });
            if (validateCategory.length === 0) {
                const category = await prisma.categorias.create({
                    data: {
                        name
                    }
                });
                if (!category) {
                    throw 'Ocurrió un problema al crear la categoria';
                }
                res.status(201).send(category);
            } else {
                throw 'La categoría ingresada ya ha sido creada';
            }
        } catch (error) {
            res.status(500).json({ message: error });
        }
    },
    assignEvent: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { idEvento, idCategoria } = req.body;
        try {
            const validateAssign = await prisma.eventosCategorias.findMany({
                where: {
                    idEvento,
                    idCategoria
                }
            });
            if (validateAssign.length === 0) {
                const assign = await prisma.eventosCategorias.create({
                    data: {
                        idEvento,
                        idCategoria
                    }
                });
                if (!assign) {
                    throw 'Ocurrió un problema al asignar la categoría al evento';
                } else {
                    res.status(201).send(assign);
                }
            } else {
                throw 'El evento ya tiene la categoría asignada';
            }
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}

export default categoriesController;