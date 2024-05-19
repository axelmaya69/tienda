import { Envase } from '../models/Envase.js'

//obtiene todos las envases
export const getEnvases= async (req, res) => {
    try {
        const envases = await Envase.findAll();
        res.json(envases);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//obtiene envase por idENvase
export const getEnvase = async (req, res) => {
    try{
        const {idEnvase} = req.params;
        const envase = await Envase.findOne({
            where:{
                idEnvase
            }
        });
        if(!envase) return res.status(404).json({message: "¡No existe!"});
        res.json(envase);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}
//crea un nuevo envase
export const createEnvase = async (req, res) => {
    const { nombre } = req.body
    try {
        const newEnvase= await Envase.create({
            nombre
        });
        res.json(newEnvase)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//elimina un envase por id
export const deleteEnvase = async (req, res) => {
    try{
        const {idEnvase}= req.params;
        await Envase.destroy({
        where: {
            idEnvase
        },
     });
     if(!idEnvase) return res.status(404).json({message: "¡No existe!"});
     res.sendStatus(204);
    
    } catch(error){
        return res.status(500).json({message: error.message});
    }
    
}

//actualiza por id
export const updateEnvase = async (req, res) => {
    try {
        const { idEnvase } = req.params;
        const {nombre}= req.body;
        
        const envase= await Envase.findByPk(idEnvase);
        envase.nombre=nombre;
        
        await envase.save();
        
        if(!envase) return res.status(404).json({message: "¡No existe!"});
        
        res.json(envase);
    
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }
}
