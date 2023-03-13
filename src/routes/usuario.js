const { json } = require("express");
const express=require("express");
const Usuarios=require("../models/Usuario");

const router=express.Router();

//Metodo para obtener el listado de usuarios
router.get("/usuario",(req,res)=>{
    Usuarios.find().select({_id:0,usu_nom:1,usu_correo:1,rol_id:1,usu_telf:1,est:1})
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>res.send(error));
})

//Metodo para obtner un usuario en especifico
router.get("/usuario/:usu_nom",(req,res)=>{
    const{usu_nom }=req.params;

    Usuarios.find({usu_nom:usu_nom}).select({usu_pass:0,_id:0})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>res.send(error));
})

router.put("/usuario/:usu_nom",async (req,res)=>{
    const { usu_nom }=req.params;
    nuevoUsuario = req.body;

    Usuarios.updateOne({usu_nom:usu_nom},
        {$set: {usu_nom:nuevoUsuario.usu_nom}})
    .then((data)=>{res.json(data)})
    .catch((error)=>res.send(error));
})

router.delete("/usuario/:usu_nom",(req,res)=>{
    const { usu_nom }=req.params;

    Usuarios.deleteOne({usu_nom:usu_nom})
    .then((data)=>res.json(data))
    .catch((error)=>res.send(error));
})


//crear usuario
router.post("/crear_usuario",(req,res)=>{
    const nuevoUsuario = Usuarios(req.body);

       nuevoUsuario.save()
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
