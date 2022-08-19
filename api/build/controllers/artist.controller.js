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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['query', 'info'] });
const artistController = {
    getArtist: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        const { name } = req.query;
        try {
            if (name) {
                const artistByName = yield prisma.artista.findMany({
                    where: {
                        name: {
                            search: `${name}`
                        }
                    },
                    include: {
                        usuario: {
                            include: {
                                persona: true
                            }
                        }
                    }
                });
                if (artistByName.length > 0) {
                    return res.status(200).json(artistByName);
                }
                else {
                    throw `No se encontraron artistas con el nombre de »${name}«.`;
                }
            }
            else {
                const artists = yield prisma.artista.findMany({
                    include: {
                        usuario: {
                            include: {
                                persona: true
                            }
                        }
                    }
                });
                if (artists.length > 0) {
                    return res.status(200).json(artists);
                }
                else {
                    throw `No se encontraron resultados.`;
                }
            }
        }
        catch (error) {
            return res.status(400).json({
                message: error
            });
        }
    }),
    getArtistById: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const artist = yield prisma.artista.findFirst({
                where: {
                    id
                },
                include: {
                    usuario: {
                        include: {
                            persona: true
                        }
                    },
                    eventos: {
                        include: {
                            eventosCategorias: {
                                include: {
                                    categorias: true
                                }
                            }
                        }
                    }
                }
            });
            if (artist) {
                return res.status(200).json(artist);
            }
            else {
                throw `No se encontró el artista por el id »${id}«.`;
            }
        }
        catch (error) {
            return res.status(400).json({
                message: error
            });
        }
    }),
    createArtist: (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, img, idUsuario } = req.body;
        try {
            const isUsuario = yield prisma.usuario.findUnique({
                where: { id: idUsuario }
            });
            if (!isUsuario) {
                throw 'Ocurrió un problema al crear el artista, se necesita ser usuario para poder ser artista.';
            }
            const isArtist = yield prisma.artista.findMany({
                where: {
                    OR: [{ name }, { AND: { idUsuario: idUsuario } }]
                }
            });
            if (isArtist.length > 0) {
                throw `Ya hay un artista con el nombre ${name} o el id ${idUsuario}, verifica nuevamente por favor.`;
            }
            const createArtist = yield prisma.artista.create({
                data: {
                    name: `${name}`,
                    img: `${img}`,
                    idUsuario: `${idUsuario}`
                }
            });
            if (!createArtist) {
                throw 'Ocurrió un error al crear el artista, intenta nuevamente.';
            }
            return res.status(201).json(createArtist);
        }
        catch (error) {
            return res.status(400).json({
                message: error
            });
        }
    })
};
exports.default = artistController;
