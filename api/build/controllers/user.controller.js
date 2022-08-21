"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signJWT_1 = __importDefault(require("../functions/signJWT"));
const prisma = new client_1.PrismaClient({ log: ['query', 'info'] });
const userController = {
    validateToken: (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = res.locals.jwt; //get id user and token from middleware
        const user = yield prisma.usuario.findMany({
            where: {
                AND: {
                    id: token.id,
                    token: token.token
                }
            }
        });
        if (user.length === 0) {
            return res.status(200).json({
                authorized: false
            });
        }
        return res.status(200).json({
            authorized: true
        });
    }),
    register: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        let { email, password, idPersona } = req.body;
        bcryptjs_1.default.hash(password, 10, (hashError, hash) => {
            if (hashError) {
                return res.status(500).json({
                    message: hashError.message,
                    error: hashError
                });
            }
            //Validar que el correo ingresado no esté en la base de datos
            return prisma.usuario.findUnique({
                where: {
                    email
                }
            }).then((verifyEmail) => {
                if (verifyEmail === null) {
                    //Insert user into db
                    return prisma.usuario.create({
                        data: {
                            email,
                            password: hash,
                            idPersona
                        }
                    });
                }
                else {
                    throw 'Ya hay un usuario creado con el mismo email.';
                }
            }).then((user) => {
                res.status(201).json({ user });
            }).catch(error => {
                return res.status(500).json({
                    error: error
                });
            });
        });
    }),
    login: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        let { email, password } = req.body;
        try {
            const user = yield prisma.usuario.findUnique({
                where: {
                    email
                }
            });
            if (!user) {
                throw 'El correo ingresado no existe, crea una cuenta para poder ingresar.';
            }
            bcryptjs_1.default.compare(password, user.password, (_error, result) => {
                try {
                    if (result) {
                        (0, signJWT_1.default)(user, (_error, token) => {
                            if (_error) {
                                return res.status(401).json({
                                    authorized: false,
                                    error: _error
                                });
                            }
                            else if (token) {
                                return prisma.usuario.update({
                                    where: { email },
                                    data: { token },
                                }).then(() => {
                                    return res.status(200).json({
                                        token
                                    });
                                }).catch(err => {
                                    return res.status(500).json({
                                        error: err
                                    });
                                });
                            }
                        });
                    }
                    else {
                        throw 'La contaseña ingresada es incorrecta.';
                    }
                }
                catch (error) {
                    res.status(401).json({
                        message: error
                    });
                }
            });
        }
        catch (error) {
            res.status(401).json({
                message: error
            });
        }
    }),
    logout: (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = res.locals.jwt; //get id user and token from middleware
            const user = yield prisma.usuario.update({
                where: { id: token.id },
                data: { token: null },
            });
            if (user.token === null) {
                delete res.locals.jwt;
                return res.status(200).json({
                    logout: true
                });
            }
            return res.status(500).json({
                logout: false
            });
        }
        catch (error) {
            res.status(401).json({
                message: error
            });
        }
    }),
    getAll: (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield prisma.usuario.findMany({
                select: {
                    id: true,
                    email: true,
                    token: true,
                    isAvaliable: true,
                    persona: {
                        select: {
                            id: true,
                            name: true,
                            lastname: true,
                            city: true,
                            country: true,
                        }
                    },
                    rolesUsuarios: {
                        select: {
                            idRol: false,
                            idUsuario: false,
                            roles: {
                                select: {
                                    id: true,
                                    nombre: true
                                }
                            }
                        }
                    }
                }
                // include: {
                //     persona: true,
                //     rolesUsuarios: true,
                //     eventosCompras: {
                //         include: {
                //             eventos: true
                //         }
                //     }
                // }
            });
            if (!users) {
                throw 'No se encontraron resultados';
            }
            return res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({
                message: error
            });
        }
    }),
    getRoleByToken: (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = res.locals.jwt; //get id user and token from middleware
            const role = yield prisma.rolesUsuarios.findMany({
                select: {
                    idRol: false,
                    idUsuario: false,
                    roles: {
                        select: {
                            id: true,
                            nombre: true
                        }
                    }
                },
                where: {
                    idUsuario: token.id
                }
            });
            res.status(200).send(role);
        }
        catch (error) {
            res.status(500).json({
                message: error
            });
        }
    })
};
exports.default = userController;
