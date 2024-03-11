//importamos mongoose
import mongoose from "mongoose";

//definimos un esquema

const ClientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number
})

//definimos el modelo
const ClientesModel = mongoose.model("clientes", ClientesSchema);

//exportamos
export default ClientesModel;