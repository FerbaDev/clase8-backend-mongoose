import { Router } from "express";
const router = Router();

//importamos el modelo
import ClientesModel from "../models/clientes.model.js";

//1) Obtenemos el listado de clientes
router.get("/", async (req, res) => {
    try {
        const clientes = await ClientesModel.find();
        res.json(clientes)
    } catch (error) {
        res.status(500).json({message: "Error del servidor"})
    }
})

//2) Subimos un nuevo cliente por postman

router.post("/", async (req, res) => {
    try {
        const cliente = new ClientesModel(req.body);
        await cliente.save();
        res.send({message: "Cliente generado exitosamente: ", cliente})
        } catch (error) {
        res.status(500).json({message: "Error del servidor, no se posteó el cliente"})
    }
})

//3) Actualizamos un cliente por su id

router.put("/:id", async (req, res) => {
    try {
        const cliente = await ClientesModel.findByIdAndUpdate(req.params.id, req.body);
        if (!cliente) {
            return res.status(404).send({message: "Cliente no encontrado"})
        }
        res.status(200).send({message: "Cliente actualizado!"});
    } catch (error) {
        res.status(500).json({message: "Error del servidor"})
    }
})

//3) Eliminamos un cliente por su id


router.delete("/:id", async (req, res) => {
    try {
        const cliente = await ClientesModel.findByIdAndDelete(req.params.id);
        if (!cliente) {
            return res.status(404).send({message: "Cliente no encontrado"})
        }
        res.status(200).send({message: "Cliente eliminado!"});
    } catch (error) {
        res.status(500).json({message: "Error del servidor"})
    }
})









export default router;