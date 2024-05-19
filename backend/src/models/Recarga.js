import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Recarga = sequelize.define ("Recarga",{
idRecarga:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
monto:{
    type: DataTypes.STRING,
}
},
{timestamps:false}
)
