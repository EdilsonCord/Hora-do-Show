const router = require("express").Router();
const mongoose = require("mongoose");
const authMiddleware = require("../middlewares/auth");
const Alimento = mongoose.model("Alimento");
const Dieta = mongoose.model("Dieta");

//PEGAR A LISTA DE ALIMENTOS
router.get("/get", function(req,res) {
  Alimento.find({})
  .then(function(dbAlimentos) {
    res.json(dbAlimentos);
  })
  .catch(function(err) {
    res.json(err);
  })
});

//CRIAR UM ALIMENTO
  router.post("/create", async(req, res) => {
    await Alimento.create(req.body)
      .then(function(dbAlimento) {
        // If we were able to successfully create a Product, send it back to the client
        res.json(dbAlimento);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  //PEGAR UM ALIMENTO POR ID
  router.get("/get/id/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
      Alimento.findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("alimentos")
      .then(function(dbAlimento) {
        // If we were able to successfully find an Product with the given id, send it back to the client
        res.json(dbAlimento);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  //PEGAR UM ALIMENTO POR NOME
  router.get("/get/nome/:nome", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
      Alimento.findOne({ nome_Alimento: req.params.nome })
      // ..and populate all of the notes associated with it
      .populate("alimentos")
      .then(function(dbAlimento) {
        // If we were able to successfully find an Product with the given id, send it back to the client
        res.json(dbAlimento);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  
  //LINKANDO ALIMENTO E DIETA POR NOMES
  router.post("/link/:nomeAlimento/:nomeDieta", async(req, res) => {
  
    try{
    const alimento = await Alimento.findOne({nome_Alimento: req.params.nomeAlimento})
    const dieta = await Dieta.findOne({nome_Dieta: req.params.nomeDieta})
    console.log(alimento._id)
    console.log(dieta._id)
    dieta.alimentos.push(alimento._id)
    dieta.save();
    alimento.dietas.push(dieta._id)
    alimento.save();
    res.json(alimento)
    } catch(err){
      res.json(err);
    }
  
  });

  router.use(authMiddleware);
  module.exports = router;