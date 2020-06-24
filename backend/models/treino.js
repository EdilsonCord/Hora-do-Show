const mongoose = require("mongoose");
const auth = require("../middlewares/auth");

const TreinoSchema = new mongoose.Schema({
    desc_treino: {
      type: String,
      unique: true
    },
    tipo_treino: {
      type: String,
      unique:true,
    },
})


const Treino = mongoose.model("Treino", TreinoSchema)

Treino.collection.insertMany([
    {desc_treino: "Treino para Triceps, Peito e Ombro",
    tipo_treino: "A"},

    {desc_treino: "Treino para Costas e Biceps",
    tipo_treino: "B"},

    {desc_treino: "Treino para Pernas e Abdomen",
    tipo_treino: "C"},

])
