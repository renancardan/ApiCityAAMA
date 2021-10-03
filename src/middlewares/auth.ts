import { Request, Response, NextFunction} from 'express';
import { User  } from '../models/user';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction)=> {
    
        let sucess = false;
        let decoded = {};
        if(req.headers.authorization) {
            const [authType, token] = req.headers.authorization.split(' '); 
            if(authType === 'Bearer') {
            try{
               
         
                decoded = JWT.verify(token, process.env.JWT_SECRET_KEY as string,);
              
                sucess = true;


            } catch(err) {
               
            }
        
          } 
        }

        if(sucess) {
            req.body.idUser = decoded;
            next();
        } else {
            res.status(403); //not authorized
            res.json({ error: 'não autorizado'});
        }

    }
}