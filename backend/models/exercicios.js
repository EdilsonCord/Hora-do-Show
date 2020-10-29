const mongoose = require("mongoose");
const auth = require("../middlewares/auth");

var Schema = mongoose.Schema;

const ExercicioSchema = Schema({
    nome_exercicio: {
        type: String,
        required: true
    },
    descricao_exercicio: {
        type: String,
        required: true
    },
    qtd_series: {
        type: String,
        required: true
    },
    qtd_repeticoes: {
        type: String,
        required: true
    },
    qtd_carga:{
        type: String,
        required: true
    },
    treinos: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Treino' }]
    /* video_exercicios */
})


const Exercicio = mongoose.model("Exercicio", ExercicioSchema)

// Exercicio.collection.insertMany([
//     {nome_exercicio: "Supino Reto",
//     descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
//     qtd_series: 3,
//     qtd_repeticoes: 12},

    /* {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},
    
    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12}, */

// ])