import { Router } from "express";
import { getClientes,getCliente,deleteCliente,createCliente,updateCliente } from "../controllers/ClienteControllers.js";

const router = Router();

    router.get("/clientes",getClientes);
    router.post("/cliente",createCliente);
    router.put("/cliente/:idCliente",updateCliente);
    router.delete("/cliente/:idCliente",deleteCliente);
    router.get("/cliente/:idCliente",getCliente);

export default router;