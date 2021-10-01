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
exports.criarUser = exports.nome = exports.random = exports.ping = void 0;
const user_1 = require("../models/user");
const ping = (req, res) => {
    res.json({ pong: true });
};
exports.ping = ping;
const random = (req, res) => {
    let nRand = Math.floor(Math.random() * 10);
    res.json({ number: nRand });
};
exports.random = random;
const nome = (req, res) => {
    let Nome = req.params.nome;
    res.json({ Nome });
};
exports.nome = nome;
const criarUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    let name = req.body.nome;
    let idade = req.body.idade;
    let usuario = yield user_1.User.create({
        nome: name,
        age: idade,
    });
    res.json({ id: usuario.id });
});
exports.criarUser = criarUser;
