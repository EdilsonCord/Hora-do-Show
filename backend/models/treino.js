const mongoose = require("mongoose");
const auth = require("../middlewares/auth");

var Schema = mongoose.Schema;

const TreinoSchema = Schema({
    desc_treino: {
      type: String,
      required: true
    },
    tipo_treino: {
      type: String,
      unique:true,
      required: true
    },
    meta: {
      type: String,
      default: "Definir"
    },
    imagem: {
      type: String,
      default: "https://cfl.dropboxstatic.com/static/images/illustration_catalog/403_error-illo.png"
    },

    exercicios: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'Exercicio' }]
})


const Treino = mongoose.model("Treino", TreinoSchema)

// Treino.collection.insertMany([
//     {desc_treino: "Treino para Triceps, Peito e Ombro",
//     tipo_treino: "A"},

//     {desc_treino: "Treino para Costas e Biceps",
//     tipo_treino: "B"},

//     {desc_treino: "Treino para Pernas e Abdomen",
//     tipo_treino: "C"},

// ])
