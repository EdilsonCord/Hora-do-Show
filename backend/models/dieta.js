const mongoose = require("mongoose");
const auth = require("../middlewares/auth");


const DietaSchema = new mongoose.Schema({
    nome_Dieta: {
        type: String,
        unique: true
    },
    descricacao_Dieta: {
        type: String,
        unique:true,
    },
    /* video_Dietas */
})


const Dieta = mongoose.model("Dieta", DietaSchema)

Dieta.collection.insertMany([
    {nome_Dieta: "Dieta para perda de peso",
    descricacao_Dieta: "Dieta com baixos carboidratos."
    },
    {nome_Dieta: "Dieta para ganho de peso",
    descricacao_Dieta: "Dieta com alto índice calórico"
    }])
