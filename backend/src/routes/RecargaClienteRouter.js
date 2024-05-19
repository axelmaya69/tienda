
import express from 'express';
import { getRecargasClientes,getRecargaClienteById,createRecargaCliente,updateRecargaCliente,deleteRecargaCliente } from '../controllers/RecargaClienteControllers.js';

const router = express.Router();


router.get('/recargasclientes', getRecargasClientes);//ya
router.get('/recargasclientes/:id', getRecargaClienteById);//ya
router.post('/recargasclientes', createRecargaCliente);//ya
router.put('/recargasclientes/:id', updateRecargaCliente);//ya
router.delete('/recargasclientes/:id', deleteRecargaCliente);//ya

export default router;
