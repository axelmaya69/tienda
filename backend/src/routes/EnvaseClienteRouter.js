import express from 'express';
import { getEnvasesClientes,getEnvaseClienteById,updateEnvaseCliente,deleteEnvaseCliente,createEnvaseCliente } from '../controllers/EnvaseClienteControllers.js';

const router = express.Router();
 
router.get('/envasesclientes',getEnvasesClientes);//ya
router.get('/envasesclientes/:id', getEnvaseClienteById);//ya
router.post('/envasesclientes', createEnvaseCliente);//ya
router.put('/envasesclientes/:id', updateEnvaseCliente);//ya
router.delete('/envasesclientes/:id', deleteEnvaseCliente);

export default router;
