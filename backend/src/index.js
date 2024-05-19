import app from "./app.js";
import { sequelize } from "./database/database.js";
 

async function main(){
    try{
    await sequelize.sync({force:false});
    console.log("Conexión establecida exitosamente");
    app.listen(3000);
    console.log("Escuchando en puerto",3000);
    }
    catch(error){
        console.log("No es posible conectarse",error);
    }
}
main();