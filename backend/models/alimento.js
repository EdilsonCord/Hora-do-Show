const mongoose = require("mongoose");
const auth = require("../middlewares/auth");


const AlimentoSchema = new mongoose.Schema({
    nome_Alimento: {
        type: String,
    },
    kcal_Alimento: {
        type: String,
        unique: true
    },
    descricacao_Alimento: {
        type: String,
        unique:true,
    },
    /* video_Alimentos */
})


const Alimento = mongoose.model("Alimento", AlimentoSchema)

Alimento.collection.insertMany([
    {nome_Alimento: "Maçã",
    kcal_Alimento: "52",
    descricacao_Alimento: "Alimento de baixo índice glicêmico."
    },
])
