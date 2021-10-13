import { Request, Response } from "express";
import JWT from 'jsonwebtoken';
import { User } from "../models/user";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

dotenv.config();

export const register = async (req: Request, res: Response) => {
        let pass =  await bcrypt.hash(req.body.senha, 10);
        let passPai = await bcrypt.hash(req.body.pai, 10);
        let passMae = await bcrypt.hash(req.body.mae, 10);
        let passRes1 = await bcrypt.hash(req.body.r1, 10);
        // let passRes2 = await bcrypt.hash(req.body.r2, 10);
        // let passRes3 = await bcrypt.hash(req.body.r3, 10);

        res.json({ nome:req.body.nomeUser , nomeC:req.body.nameCamp, senha:pass, perg1:req.body.p1, res1:passRes1, pai: passPai, mae:passMae, });
       

//         let hasUser = await User.findOne({where: { nome:req.body.nameCamp }});
//         if(!hasUser) {
//             let newUser = await User.create({
//                 nome: req.body.nameCamp ,
//                 senha: req.body.senha,  
//                 });

//             const token = JWT.sign(
//                 { id: newUser.id_user, nome: newUser.nome},
//                 process.env.JWT_SECRET_KEY as string
//             );

//             res.status(201);
//             res.json({ id: newUser.id_user , token});
//         } else {
//             res.json({ error: 'E-mail já existe.' });
//         }
    

//     res.json({ error: "Não existe"});
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