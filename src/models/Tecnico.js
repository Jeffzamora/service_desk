const mongoose=require("mongoose");

const tecnicoSchema = mongoose.Schema({
    tec_nom: {
        type: String,
        required: true
    },
    tec_apellido: {
        type: String,
        required: true
    },
    tec_direc: {
        type: String,
        required: true
    },
    tec_cel: {
        type: String,
        required: true
    },
    esta: {
        type: String,
        required: true
    }
});

//conexion a la collection tecnicos a MONGO DB
module.exports=mongoose.model('tecnicos',tecnicoSchema);
