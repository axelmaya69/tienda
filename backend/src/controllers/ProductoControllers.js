import { Producto } from '../models/Producto.js'

//obtiene todos los productos
export const getProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//obtiene productos por idProducto
export const getProducto = async (req, res) => {
    try{
        const {idProducto} = req.params;
        const producto = await Producto.findOne({
            where:{
                idProducto
            }
        });
        if(!producto) return res.status(404).json({message: "¡No existe!"});
        res.json(producto);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}
//crea un nuevo producto
export const createProducto = async (req, res) => {
    const { nombre,precio,imagen } = req.body
    try {
        const newProducto = await Producto.create({
            nombre,
            precio,
            imagen
        });
        res.json(newProducto)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//elimina un producto por id
export const deleteProducto = async (req, res) => {
    try{
        const {idProducto}= req.params;
        await Producto.destroy({
        where: {
            idProducto
        },
     });
     if(!idProducto) return res.status(404).json({message: "¡No existe!"});
     res.sendStatus(204);
    
    } catch(error){
        return res.status(500).json({message: error.message});
    }
    
}

//actualiza por id
export const updateProducto = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const {nombre,precio,imagen}= req.body;
        
        const producto= await Producto.findByPk(idProducto);
        producto.nombre=nombre
        producto.precio=precio
        producto.imagen=imagen
        
        await producto.save();
        
        if(!producto) return res.status(404).json({message: "¡No existe!"});
        
        res.json(producto);
    
    } catch (error) {
        return res.status(500).json({message: error.message});   
    }
}
