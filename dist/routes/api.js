"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/ping', (req, res) => {
    res.json({ pong: false });
});
router.get('/random', (req, res) => {
    let nRand = Math.floor(Math.random() * 10);
    res.json({ number: nRand });
});
router.get('/nome/:nome', (req, res) => {
    let Nome = req.params.nome;
    res.json({ Nome });
});
exports.default = router;
