"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const extractJWT_1 = __importDefault(require("../../middleware/extractJWT"));
router.get('/users', user_controller_1.default.getAll);
router.post('/users/login', user_controller_1.default.login);
router.post('/users/register', user_controller_1.default.register);
router.get('/users/validateToken', extractJWT_1.default, user_controller_1.default.validateToken);
router.get('/users/role', extractJWT_1.default, user_controller_1.default.getRoleByToken);
router.put('/users/logout', extractJWT_1.default, user_controller_1.default.logout);
exports.default = router;
