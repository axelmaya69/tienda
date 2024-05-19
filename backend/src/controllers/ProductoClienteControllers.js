import { ProductoCliente } from '../models/ProductoCliente.js'; // Importa el modelo ProductoCliente

// Controlador para la tabla ProductoCliente

// Obtener todas las relaciones ProductoCliente
export const getProductosClientes = async (req, res) => {
    try {
        const productosClientes = await ProductoCliente.findAll();
        res.json(productosClientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una relación ProductoCliente por ID
export const getProductoClienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const productoCliente = await ProductoCliente.findByPk(id);
        if (!productoCliente) return res.status(404).json({ message: "Relación no encontrada" });
        res.json(productoCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva relación ProductoCliente
export const createProductoCliente = async (req, res) => {
    const { idProducto, idCliente, yaDevuelto } = req.body;
    try {
        const nuevoProductoCliente = await ProductoCliente.create({ idProducto, idCliente, yaDevuelto });
        res.status(201).json(nuevoProductoCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una relación ProductoCliente por ID
export const updateProductoCliente = async (req, res) => {
    const { id } = req.params;
    const { idProducto, idCliente, yaDevuelto } = req.body;
    try {
        const productoCliente = await ProductoCliente.findByPk(id);
        if (!productoCliente) return res.status(404).json({ message: "Relación no encontrada" });
        
        await productoCliente.update({ idProducto, idCliente, yaDevuelto });
        res.json(productoCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una relación ProductoCliente por ID
export const deleteProductoCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const productoCliente = await ProductoCliente.findByPk(id);
        if (!productoCliente) return res.status(404).json({ message: "Relación no encontrada" });
        
        await productoCliente.destroy();
        res.json({ message: "Relación eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
