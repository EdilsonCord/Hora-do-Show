const mongoose = require("mongoose");
const auth = require("../middlewares/auth");

var Schema = mongoose.Schema;

const AlimentoSchema = new Schema({
    nome_Alimento: {
        type: String,
        required: true
    },
    kcal_Alimento: {
        type: String,
        required: true
    },
    descricao_Alimento: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        default: "https://cfl.dropboxstatic.com/static/images/illustration_catalog/403_error-illo.png"
      },  
    dietas: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Dieta' }]

    /* video_Alimentos */
})


const Alimento = mongoose.model("Alimento", AlimentoSchema)

// Alimento.collection.insertMany([
//     {nome_Alimento: "Maçã",
//     kcal_Alimento: "52",
//     descricacao_Alimento: "Alimento de baixo índice glicêmico."
//     },
// ])
