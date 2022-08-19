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
const eventController = {
    getAll: (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
        const events = yield prisma.eventos.findMany({
            include: {
                artista: true
            }
        });
        if (events.length > 0) {
            return res.status(200).json(events);
        }
        return res.status(500).json({ message: 'No se encontraron resultados' });
    }),
    // create: async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
    //     const { name, lastname, city, country } = req.body;
    //     try {
    //         const person = await prisma.persona.create({
    //             data: { name, lastname, city, country }
    //         });
    //         if (!person) {
    //             throw 'Ocurrió un problema al crear la persona.';
    //         }
    //         return res.status(201).json(person);
    //     } catch (error) {
    //         return res.status(500).json({ message: error });
    //     }
    // }
};
exports.default = eventController;
