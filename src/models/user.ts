import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id_user: number;
    nome: string;
    nomeUser: string;
    avatar: string;
    estrelas: number;
    tipo: string;
    telefone: string;
    pai: string;
    mae: string;
    senha: string;
    dataNasc: number;
    dataCadas: number;
}

export const User = sequelize.define<UserInstance>("User", {
    id_user: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nome: {
        type: DataTypes.STRING,
    },
    nomeUser: {
        type: DataTypes.STRING,
    },
    avatar: {
        type: DataTypes.STRING,
    },
    estrelas: {
        type: DataTypes.INTEGER,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    telefone: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING,
    },
    pai: {
        type: DataTypes.STRING,
    },
    mae: {
        type: DataTypes.STRING,
    },
    dataNasc: {
        type: DataTypes.INTEGER,
    },
    dataCadas: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'users',
    timestamps: false
});