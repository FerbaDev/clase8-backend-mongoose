import express from "express";
const app = express();
const PUERTO = 8080;
import clientesRouter from "./routes/clientes.router.js";
import 'dotenv/config'
import "./mongoConfig.js"


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas

app.use("/clientes", clientesRouter);



app.listen(PUERTO, () => {
    console.log(`Conectado en http://localhost:${PUERTO}`);
})

