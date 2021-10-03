"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sequelize = new sequelize_1.Sequelize(process.env.CLEARDB_DATABASE_URL, {
    dialect: 'mysql',
    port: parseInt(process.env.MYSQL_PORT)
});
//BancoRemoto
//process.env.CLEARDB_DATABASE_URL as string, 
//Bancolocal
// process.env.MYSQL_DB as string,
// process.env.MYSQL_USER as string,
// process.env.MYSQL_PASSWORD as string,
