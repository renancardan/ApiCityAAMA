import { Router } from "express";


const router = Router();

router.get('/ping', (req, res)=>{
    res.json({pong:false});
});

router.get('/random', (req, res)=>{
    let nRand: number = Math.floor( Math.random() * 10);
    res.json({number:nRand});
});

router.get('/nome/:nome', (req, res)=>{
    let Nome: string = req.params.nome;
    res.json({Nome});
});

export default router;