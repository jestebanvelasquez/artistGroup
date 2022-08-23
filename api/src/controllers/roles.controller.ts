import { PrismaClient } from '@prisma/client';
import { Response, Request, NextFunction } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

const rolesController = {
    getAll: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { name } = req.query;
        try {
            if (name) {
                const getRoleByName = await prisma.roles.findMany({
                    where: {
                        nombre: `${name}`
                    }
                });
                if (getRoleByName.length > 0) {
                    res.status(200).json(getRoleByName)
                } else {
                    throw `No se encontró el rol con el nombre de ${name}`;
                }
            } else {
                const roles = await prisma.roles.findMany();
                if (roles.length > 0) {
                    return res.status(200).json(roles);
                } else {
                    throw 'No se encontraron resultados';
                }
            }
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    },
    assignRole: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const { idUsuario, idRol } = req.body;
        try {
            const verifyRoleUser = await prisma.rolesUsuarios.findMany({
                where: {
                    idUsuario,
                    idRol
                }
            });
            if (verifyRoleUser.length === 0) {
                const assign = await prisma.rolesUsuarios.create({
                    data: {
                        idUsuario,
                        idRol
                    }
                });
                if (!assign) {
                    throw 'No se pudo asignar el rol al usuario, intenta nuevamente.';
                }
                return res.status(200).json(assign);
            } else {
                throw 'El usuario ya tiene él rol seleccionado.';
            }
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}

export default rolesController;