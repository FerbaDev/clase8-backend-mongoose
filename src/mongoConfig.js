//importamos mongoose
import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://Ferbadev:${process.env.PASSWORD}@cluster0.qaz6nck.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0`)
        .then(() => console.log("Conectado"))
        .catch(() => console.log("No conectado") )