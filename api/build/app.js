"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_TOKEN_SECRET = exports.SERVER_TOKEN_ISSUER = exports.SERVER_TOKEN_EXPIRETIME = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600;
exports.SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || "coolIssuer";
exports.SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || "superencryptedsecret";
const server = (0, express_1.default)();
server.use(express_1.default.json()); //transforma body a json
//midlewares:
server.use((_req, _resp, next) => {
    next();
}, (0, cors_1.default)({ maxAge: 84600 }));
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['*'];
const options = {
    origin: allowedOrigins
};
// Then pass these options to cors:
server.use((0, cors_1.default)(options));
server.use('/', index_routes_1.default);
exports.default = server;
