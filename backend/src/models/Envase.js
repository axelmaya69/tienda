import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Envase = sequelize.define ("Envase",{
idEnvase:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
nombre:{
    type: DataTypes.STRING,
}
},
{timestamps:false}
)
