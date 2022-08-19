"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const people_controller_1 = __importDefault(require("../../controllers/people.controller"));
router.get('/people', people_controller_1.default.getAll);
router.post('/people/create', people_controller_1.default.create);
exports.default = router;
