import { Router } from "express";
import { getRecarga,createRecarga,getRecargas,deleteRecarga,updateRecarga } from "../controllers/RecargaControllers.js";


const router = Router();

    router.get("/recargas",getRecargas);
    router.post("/recarga",createRecarga);
    router.put("/recarga/:idRecarga",updateRecarga);
    router.delete("/recarga/:idRecarga",deleteRecarga);
    router.get("/recarga/:idRecarga",getRecarga);

export default router;