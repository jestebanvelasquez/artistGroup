"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
//Importar todos los routers
const artist_routes_1 = __importDefault(require("./Artist/artist.routes"));
const user_routes_1 = __importDefault(require("./User/user.routes"));
const people_routes_1 = __importDefault(require("./People/people.routes"));
const events_routes_1 = __importDefault(require("./Events/events.routes"));
router.use('/', artist_routes_1.default);
router.use('/', user_routes_1.default);
router.use('/', people_routes_1.default);
router.use('/', events_routes_1.default);
exports.default = router;
