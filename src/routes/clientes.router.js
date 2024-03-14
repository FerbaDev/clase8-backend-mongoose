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

export default router;