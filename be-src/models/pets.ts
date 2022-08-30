import { Model, DataTypes } from "sequelize"
import { sequelize } from "./conection";

export class Pet extends Model {}

Pet.init({
    fullname: DataTypes.STRING,
    pictureURL: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
}, { sequelize, modelName: 'Pet' });