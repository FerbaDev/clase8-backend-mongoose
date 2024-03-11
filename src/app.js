import express from "express";
const app = express();
const PUERTO = 8080;


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas

app.get("/", (req, res) => {
    res.send("Mongoose")
})

app.listen(PUERTO, () => {
    console.log(`Conectado en http://localhost:${PUERTO}`);
})