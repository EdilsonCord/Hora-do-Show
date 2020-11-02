const mongoose = require("mongoose");
const auth = require("../middlewares/auth");

var Schema = mongoose.Schema;


const DietaSchema = new Schema({
    nome_Dieta: {
        type: String,
        required: true
    },
    descricao_Dieta: {
        type: String,
        required: true
    },
    meta: {
        type: String,
        default: "Definir"
    },
    alimentos: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Alimento' }]
    /* video_Dietas */
})


const Dieta = mongoose.model("Dieta", DietaSchema)

// Dieta.collection.insertMany([
//     {nome_Dieta: "Dieta para perda de peso",
//     descricacao_Dieta: "Dieta com baixos carboidratos."
//     },
//     {nome_Dieta: "Dieta para ganho de peso",
//     descricacao_Dieta: "Dieta com alto índice calórico"
//     }])
