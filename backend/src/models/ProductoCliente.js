import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
 

export const ProductoCliente= sequelize.define('ProductoCliente', {
 idProdCli:{
  type: DataTypes.INTEGER,
  primaryKey:true,
  allowNull: false,
  autoIncrement: true,
 
 },

  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique:false,
  },
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique:false,
  },
  yaDevuelto:{
    type:DataTypes.BOOLEAN,
    allowNull: false
  }

},
{
  timestamps: false,
});

 