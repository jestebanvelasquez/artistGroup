"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app_1 = require("../app");
const signJWT = (user, callback) => {
    var timeSinchEpoch = new Date().getTime();
    var expirationTime = timeSinchEpoch + Number(app_1.SERVER_TOKEN_EXPIRETIME) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);
    try {
        jsonwebtoken_1.default.sign({
            id: user.id
        }, app_1.SERVER_TOKEN_SECRET, {
            issuer: app_1.SERVER_TOKEN_ISSUER,
            algorithm: 'HS256',
            expiresIn: expirationTimeInSeconds
        }, (error, token) => {
            if (error) {
                callback(error, null);
            }
            else if (token) {
                callback(null, token);
            }
        });
    }
    catch (error) {
        callback(error, null);
    }
};
exports.default = signJWT;
