import { Request, Response } from "express";

import { User } from "../models/user";

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}


export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor( Math.random() * 10);
    res.json({number:nRand});
}

export const nome = (req: Request, res: Response) => {
    let Nome: string = req.params.nome;
    res.json({Nome});
}

export const criarUser = async (req: Request, res: Response) => {
    console.log(req.body)
    let name: string = req.body.nome;
    let idade: number = req.body.idade; 
   let usuario =  await User.create({
      nome:name,
      age:idade,  
    });
    res.json({id: usuario.id });
}