import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
 
export const RecargaCliente= sequelize.define('RecargaCliente', {
  idProductoCliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idRecarga: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  yaPagada:{
    type:DataTypes.BOOLEAN,
    allowNull: false
  }

},
{
  timestamps: false
});
