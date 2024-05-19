import {  DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto } from "./Producto.js";
import { ProductoCliente } from "./ProductoCliente.js";
import { Recarga } from "./Recarga.js";
import { Envase } from "./Envase.js";
import { RecargaCliente } from "./RecargaCliente.js";
import { EnvaseCliente } from "./EnvaseCliente.js";

export const Cliente = sequelize.define ("Cliente",{
idCliente:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    
},
nombre:{
    type: DataTypes.STRING,
    unique:true,
}
},
{timestamps:false, 
}
);

Cliente.belongsToMany(Producto,{
    through: ProductoCliente,
    foreignKey: 'idCliente',
});
Producto.belongsToMany(Cliente,{
    through:ProductoCliente,
    foreignKey:'idProducto'

});
Cliente.belongsToMany(Recarga,{
    through: RecargaCliente,
    foreignKey: 'idCliente',
});
Recarga.belongsToMany(Cliente,{
    through:RecargaCliente,
    foreignKey:'idRecarga'

});
Cliente.belongsToMany(Envase,{
    through: EnvaseCliente,
    foreignKey: 'idCliente',
});
Envase.belongsToMany(Cliente,{
    through:EnvaseCliente,
    foreignKey:'idEnvase'

}
);