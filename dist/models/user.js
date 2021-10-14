"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const mysql_1 = require("../instances/mysql");
exports.User = mysql_1.sequelize.define("User", {
    id_user: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    nomeUser: {
        type: sequelize_1.DataTypes.STRING,
    },
    avatar: {
        type: sequelize_1.DataTypes.STRING,
    },
    estrelas: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING,
    },
    telefone: {
        type: sequelize_1.DataTypes.STRING,
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
    },
    pai: {
        type: sequelize_1.DataTypes.STRING,
    },
    mae: {
        type: sequelize_1.DataTypes.STRING,
    },
    dataNasc: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    dataCadas: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    tableName: 'users',
    timestamps: false
});
