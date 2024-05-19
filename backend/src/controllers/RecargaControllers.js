import { Recarga } from '../models/Recarga.js'

//obtiene todos las recargas
export const getRecargas= async (req, res) => {
    try {
        const recargas = await Recarga.findAll();
        res.json(recargas);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//obtiene recarga por idRecarga
export const getRecarga = async (req, res) => {
    try{
        const {idRecarga} = req.params;
        const recarga = await Recarga.findOne({
            where:{
                idRecarga
            }
        });
        if(!recarga) return res.status(404).json({message: "¡No existe!"});
        res.json(recarga);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}
//crea un nueva recarga
export const createRecarga = async (req, res) => {
    const { monto } = req.body
    try {
        const newRecarga= await Recarga.create({
            monto
        });
        res.json(newRecarga)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//elimina un recarga por id
export const deleteRecarga = async (req, res) => {
    try{
        const {idRecarga}= req.params;
        await Recarga.destroy({
        where: {
            idRecarga
        },
     });
     if(!idRecarga) return res.status(404).json({message: "¡No existe!"});
     res.sendStatus(204);
    
    } catch(error){
        return res.status(500).json({message: error.message});
    }
    
}

//actualiza por id
export const updateRecarga = async (req, res) => {
    try {
        const { idRecarga } = req.params;
        const {monto}= req.body;
        
        const recarga= await Recarga.findByPk(idRecarga);
        recarga.monto=monto
        
        await recarga.save();
        
        if(!recarga) return res.status(404).json({message: "¡No existe!"});
        
        res.json(recarga);
    
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }
}
