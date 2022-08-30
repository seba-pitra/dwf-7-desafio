import { Model, DataTypes } from "sequelize"
import { sequelize } from "./conection";

export class User extends Model {}

User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
}, { sequelize, modelName: 'User' });