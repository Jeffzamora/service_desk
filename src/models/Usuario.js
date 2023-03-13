const mongoose=require("mongoose");

const usuarioSchema = mongoose.Schema({
    usu_nom: {
        type: String,
        required: true
    },
    usu_pass: {
        type: String,
        required: true
    },
    usu_correo: {
        type: String,
        required: false
    }
      
});

//conexion a la collection user a MONGO DB
module.exports=mongoose.model('users',usuarioSchema);
