const mongoose = require("mongoose");
const auth = require("../middlewares/auth");


const ExercicioSchema = new mongoose.Schema({
    nome_exercicio: {
        type: String,
        unique: true
    },
    descricacao_exercicio: {
        type: String,
        unique:true,
    },
    qtd_series: {
        type: Number,
        unique: true,
    },
    qtd_repeticoes: {
        type: Number,
        unique: true
    }
    /* video_exercicios */
})


const Exercicio = mongoose.model("Exercicio", ExercicioSchema)

Exercicio.collection.insertMany([
    {nome_exercicio: "Supino Reto",
    descricacao_exercicio: "Supino reto (180º) é a variação do supino feita em banco plano em 180º. O supino reto desenvolve por hipertrofia a área do músculo peitoral médio.",
    qtd_series: 3,
    qtd_repeticoes: 12},

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

])