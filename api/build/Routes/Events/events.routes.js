"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const event_controller_1 = __importDefault(require("../../controllers/event.controller"));
// import extractJWT from "../../middleware/extractJWT"
router.get('/event', event_controller_1.default.getAll);
// router.post('/users/login', eventController.login);
// router.post('/users/register', eventController.register);
// router.get('/users/validateToken', extractJWT, eventController.validateToken);
// router.get('/users/role', extractJWT, eventController.getRoleByToken);
// router.put('/users/logout', extractJWT, eventController.logout);
exports.default = router;
