import express from "express";
const app = express();
const PUERTO = 8080;
import clientesRouter from "./routes/clientes.router.js";
import 'dotenv/config'


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas

app.use("/clientes", clientesRouter)

app.listen(PUERTO, () => {
    console.log(`Conectado en http://localhost:${PUERTO}`);
})

//importamos mongoose
import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://Ferbadev:${process.env.PASSWORD}@cluster0.qaz6nck.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0`)
        .then(() => console.log("Conectado"))
        .catch(() => console.log("No conectado") )