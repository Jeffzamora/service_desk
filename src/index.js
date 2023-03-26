const express=require("express");
const mongoose=require("mongoose");
const usuarioRoutes=require("./routes/usuario");
const tecnicoRoutes=require("./routes/tecnico");

//settings
const app=express();
const port=4001;
const MONGO_URI="mongodb+srv://jeffzamorachiqui97:Chiqui97.@bdticket.k0jfmf7.mongodb.net/db_ticket?retryWrites=true&w=majority"

//midlewares
app.use(express.json());

//routes
app.use("/api",usuarioRoutes);
app.use("/api",tecnicoRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>Sistema de Ticket</h1>");
})

//MongoDB Connection
mongoose
    .connect(MONGO_URI)
    .then(()=>console.log("Conectado a MongoDB"))
    .catch((error)=>console.error(error));



app.listen(port,()=>{
    console.log("Applicacion corriendo en puerto ",port);
})

//procesos
process.on('SIGHUP', () => {
    console.log('SIGHUP');
    });
process.kill(process.pid,'SIGHUP')