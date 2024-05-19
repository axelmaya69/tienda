import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
 
export const EnvaseCliente= sequelize.define('EnvaseCliente', {
  idProductoCliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idEnvase: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  yaDevuelto:{
    type:DataTypes.BOOLEAN,
    allowNull: false
  }

},
{
  timestamps: false
});
