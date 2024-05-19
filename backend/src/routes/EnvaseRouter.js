import { Router } from "express";
import { getEnvase,getEnvases,updateEnvase,deleteEnvase,createEnvase } from "../controllers/EnvaseControllers.js";


const router = Router();

    router.get("/envases",getEnvases);//ya
    router.post("/envase",createEnvase);//ya
    router.put("/envase/:idEnvase",updateEnvase);//ya
    router.delete("/envase/:idEnvase",deleteEnvase);
    router.get("/envase/:idEnvase",getEnvase);//ya

export default router;