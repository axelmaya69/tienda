import express from 'express';
import { getProductosClientes, getProductoClienteById, createProductoCliente, updateProductoCliente, deleteProductoCliente } from '../controllers/ProductoClienteControllers.js';

const router = express.Router();
 
 
router.get('/productosclientes', getProductosClientes);//ya
router.get('/productosclientes/:id', getProductoClienteById);
router.post('/productosclientes', createProductoCliente);//ya
router.put('/productosclientes/:id', updateProductoCliente);
router.delete('/productosclientes/:id', deleteProductoCliente);

export default router;
