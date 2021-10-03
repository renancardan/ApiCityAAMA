import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


export const sequelize = new Sequelize(
    process.env.CLEARDB_DATABASE_URL as string, 
    
    {
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT as string)
    }
    
);
 

    //BancoRemoto
        //process.env.CLEARDB_DATABASE_URL as string, 
         
    //Bancolocal
        // process.env.MYSQL_DB as string,
        // process.env.MYSQL_USER as string,
        // process.env.MYSQL_PASSWORD as string,

