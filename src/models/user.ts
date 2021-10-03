import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id_user: number;
    nome: string;
    avatar: string;
    estrelas: number;
    tipo: string;
    email: string;
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
    avatar: {
        type: DataTypes.STRING,
    },
    estrelas: {
        type: DataTypes.INTEGER,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    senha: {
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