const { json } = require("express");
const express=require("express");
const Tecnicos=require("../models/Tecnico");

const router=express.Router();

//Metodo para obtener el listado de Tecnicos
router.get("/tecnico",(req,res)=>{
    Tecnicos.find().select({_id:0,tec_nom:1,tec_apellido:1,tec_direc:1,tec_cel:1,esta:1})
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>res.send(error));
})

//Metodo para obtener un tecnico en especifico
router.get("/tecnico/:tec_nom",(req,res)=>{
    const{tec_nom}=req.params;

    Tecnicos.find({tec_nom:tec_nom}).select({_id:0})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>res.send(error));
})


//Metodo para Actualizar un Tecnico especifico
router.put("/tecnico/:tec_nom",async (req,res)=>{
    const { tec_nom }=req.params;
    nuevoTecnico = req.body;

    Tecnicos.updateOne({tec_nom:tec_nom},
        {$set: {tec_nom:nuevoTecnico.tec_nom,tec_direc:nuevoTecnico.tec_direc}})
    .then((data)=>{res.json(data)})
    .catch((error)=>res.send(error));
})


//Borrando Tecnico
router.delete("/tecnico/:tec_nom",(req,res)=>{
    const { tec_nom }=req.params;

    Tecnicos.deleteOne({tec_nom:tec_nom})
    .then((data)=>res.json(data))
    .catch((error)=>res.send(error));
})


//crear Tecnico
router.post("/crear_tecnico",(req,res)=>{
    const nuevoTecnico = Tecnicos(req.body);

       nuevoTecnico.save()
        .then((data)=>{
            console.log(data);
            res.json(data);
        })
        .catch((error)=>{
            console.error(error);
            res.json(error);
        })
});

module.exports = router;