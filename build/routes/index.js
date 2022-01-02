"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizePhoto_1 = __importDefault(require("../controllers/resizePhoto"));
const express_1 = require("express");
const routers = (0, express_1.Router)();
routers.get('/', (req, res) => {
    res.send('Home page');
});
routers.get('/resizePhoto', resizePhoto_1.default);
exports.default = routers;
