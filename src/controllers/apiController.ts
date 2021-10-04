import { Request, Response } from "express";
import JWT from 'jsonwebtoken';
import { User } from "../models/user";
import dotenv from 'dotenv';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

dotenv.config();

export const register = async (req: Request, res: Response) => {
    let obj = JSON.parse(req.body);
    if(obj.nome && obj.senha) {
        let { nome, senha } = req.body;

        let hasUser = await User.findOne({where: { nome:obj.nome, }});
        if(!hasUser) {
            let newUser = await User.create({ nome:obj.nome , senha:obj.senha, });

            const token = JWT.sign(
                { id: newUser.id_user, nome: newUser.nome},
                process.env.JWT_SECRET_KEY as string
            );

            res.status(201);
            res.json({ id: newUser.id_user , token});
        } else {
            res.json({ error: 'E-mail já existe.' });
        }
    }

    res.json({ error: 'E-mail e/ou senha não enviados.' });
}

export const login = async (req: Request, res: Response) => {
    if(req.body.nome && req.body.senha) {
        let nome: string = req.body.nome;
        let senha: string = req.body.senha;

        let user = await User.findOne({ 
            where: { nome, senha }
        });

        if(user) {
            const token = JWT.sign(
                { id: user.id_user, nome: user.nome},
                process.env.JWT_SECRET_KEY as string,
            );

            res.json({ status: true, token });
            return;
        }
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    console.log(req.body);
    let users = await User.findAll();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].nome );
    }

    res.json({ list });
}