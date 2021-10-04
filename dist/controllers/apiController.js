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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.login = exports.register = exports.ping = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const dotenv_1 = __importDefault(require("dotenv"));
const ping = (req, res) => {
    res.json({ pong: true });
};
exports.ping = ping;
dotenv_1.default.config();
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.nome && req.body.senha) {
        let { nome, senha } = req.body;
        let hasUser = yield user_1.User.findOne({ where: { nome } });
        if (!hasUser) {
            let newUser = yield user_1.User.create({ nome, senha });
            const token = jsonwebtoken_1.default.sign({ id: newUser.id_user, nome: newUser.nome }, process.env.JWT_SECRET_KEY);
            res.status(201);
            res.json({ id: newUser.id_user, token });
        }
        else {
            res.json({ error: 'E-mail já existe.' });
        }
    }
    res.json({ error: req });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.nome && req.body.senha) {
        let nome = req.body.nome;
        let senha = req.body.senha;
        let user = yield user_1.User.findOne({
            where: { nome, senha }
        });
        if (user) {
            const token = jsonwebtoken_1.default.sign({ id: user.id_user, nome: user.nome }, process.env.JWT_SECRET_KEY);
            res.json({ status: true, token });
            return;
        }
    }
    res.json({ status: false });
});
exports.login = login;
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    let users = yield user_1.User.findAll();
    let list = [];
    for (let i in users) {
        list.push(users[i].nome);
    }
    res.json({ list });
});
exports.list = list;
