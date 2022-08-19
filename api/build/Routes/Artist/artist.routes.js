"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const artist_controller_1 = __importDefault(require("../../controllers/artist.controller"));
//http://localhost:4000/
router.get('/artist', artist_controller_1.default.getArtist);
router.get('/artist/:id', artist_controller_1.default.getArtistById);
router.post('/artist/create', artist_controller_1.default.createArtist);
exports.default = router;
