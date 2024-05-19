import { RecargaCliente } from '../models/RecargaCliente.js'; // Importa el modelo ProductoCliente

// Controlador para la tabla ProductoCliente

// Obtener todas las relaciones ProductoCliente
export const getRecargasClientes = async (req, res) => {
    try {
        const recargasClientes = await RecargaCliente.findAll();
        res.json(recargasClientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una relación ProductoCliente por ID
export const getRecargaClienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const recargaCliente = await RecargaCliente.findByPk(id);
        if (!recargaCliente) return res.status(404).json({ message: "Relación  no encontrada" });
        res.json(recargaCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva relación ProductoCliente
export const createRecargaCliente = async (req, res) => {
    const { idRecarga, idCliente, yaPagada } = req.body;
    try {
        const nuevoRecargaCliente = await RecargaCliente.create({ idRecarga, idCliente, yaPagada });
        res.status(201).json(nuevoRecargaCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una relación ProductoCliente por ID
export const updateRecargaCliente = async (req, res) => {
    const { id } = req.params;
    const { idRecarga, idCliente, yaPagada } = req.body;
    try {
        const recargaCliente = await RecargaCliente.findByPk(id);
        if (!recargaCliente) return res.status(404).json({ message: "Relación no encontrada" });
        
        await recargaCliente.update({ idRecarga, idCliente, yaPagada });
        res.json(recargaCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una relación ProductoCliente por ID
export const deleteRecargaCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const recargaCliente = await RecargaCliente.findByPk(id);
        if (!recargaCliente) return res.status(404).json({ message: "Relación no encontrada" });
        
        await recargaCliente.destroy();
        res.json({ message: "Relación eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
