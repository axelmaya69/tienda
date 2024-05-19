import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";   

export const Producto = sequelize.define ("Producto",{
idProducto:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    
},
nombre:{
    type: DataTypes.STRING,
    allowNull:false
},
precio:{
    type:DataTypes.FLOAT,
    allowNull: false
},
imagen:{
    type:DataTypes.BLOB,
    allowNull: false
}

},
{timestamps:false,
} 
);
 

