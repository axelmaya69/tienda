import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'tienda',
    'root',
    '',
    {
    host:'localhost',
    dialect: 'mysql'

});