"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const convert = express_1.default.Router();
convert.get('/convert', (req, res) => {
    res.send('convert page');
});
exports.default = convert;
