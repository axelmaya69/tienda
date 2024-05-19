import { Router } from "express";
import { getProducto,getProductos,createProducto,updateProducto,deleteProducto } from "../controllers/ProductoControllers.js";

const router = Router();

    router.get("/productos",getProductos); //ya
    router.post("/producto",createProducto);// ya
    router.put("/producto/:idProducto",updateProducto);
    router.delete("/producto/:idProducto",deleteProducto);
    router.get("/producto/:idProducto",getProducto); //ya

export default router;