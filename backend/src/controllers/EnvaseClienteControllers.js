import { EnvaseCliente } from '../models/EnvaseCliente.js'; // Importa el modelo ProductoCliente

// Controlador para la tabla ProductoCliente

// Obtener todas las relaciones ProductoCliente
export const getEnvasesClientes = async (req, res) => {
    try {
        const envasesClientes = await EnvaseCliente.findAll();
        res.json(envasesClientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una relación por ID
export const getEnvaseClienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const envaseCliente = await EnvaseCliente.findByPk(id);
        if (!envaseCliente) return res.status(404).json({ message: "Relación no encontrada" });
        res.json(envaseCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva relación ProductoCliente
export const createEnvaseCliente = async (req, res) => {
    const { idEnvase, idCliente, yaDevuelto } = req.body;
    try {
        const nuevoEnvaseCliente = await EnvaseCliente.create({ idEnvase, idCliente, yaDevuelto });
        res.status(201).json(nuevoEnvaseCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una relación ProductoCliente por ID
export const updateEnvaseCliente = async (req, res) => {
    const { id } = req.params;
    const { idEnvase, idCliente, yaDevuelto } = req.body;
    try {
        const envaseCliente = await EnvaseCliente.findByPk(id);
        if (!envaseCliente) return res.status(404).json({ message: "Relación no encontrada" });
        
        await envaseCliente.update({ idEnvase, idCliente, yaDevuelto });
        res.json(envaseCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una relación por ID
export const deleteEnvaseCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const envaseCliente = await EnvaseCliente.findByPk(id);
        if (!envaseCliente) return res.status(404).json({ message: "Relación no encontrada" });
        
        await envaseCliente.destroy();
        res.json({ message: "Relación eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
