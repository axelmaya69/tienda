import { Cliente } from '../models/Cliente.js'

//obtiene todos los clientes
export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//obtiene cliente por idCLiente
export const getCliente = async (req, res) => {
    try{
        const {idCliente} = req.params;
        const cliente = await Cliente.findOne({
            where:{
                idCliente
            }
        });
        if(!cliente) return res.status(404).json({message: "¡No existe!"});
        res.json(cliente);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}
//crea un nuevo cliente
export const createCliente = async (req, res) => {
    const { nombre } = req.body
    try {
        const newCliente = await Cliente.create({
            nombre
        });
        res.json(newCliente)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//elimina un cliente por id
export const deleteCliente = async (req, res) => {
    try{
        const {idCliente}= req.params;
        await Cliente.destroy({
        where: {
            idCliente
        },
     });
     if(!idCliente) return res.status(404).json({message: "¡No existe!"});
     res.sendStatus(204);
    
    } catch(error){
        return res.status(500).json({message: error.message});
    }
    
}

//actualiza por id
export const updateCliente = async (req, res) => {
    try {
        const { idCliente } = req.params;
        const {nombre}= req.body;
        
        const cliente= await Cliente.findByPk(idCliente);
        cliente.nombre=nombre
        
        await cliente.save();
        
        if(!cliente) return res.status(404).json({message: "¡No existe!"});
        
        res.json(cliente);
    
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }
}
