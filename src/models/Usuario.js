const mongoose=require("mongoose");

const usuarioSchema = mongoose.Schema({
    usu_nom: {
        type: String,
        required: true
    },
    usu_pass: {
        type: String,
        required: true
    }
});

module.exports=mongoose.model('users',usuarioSchema);