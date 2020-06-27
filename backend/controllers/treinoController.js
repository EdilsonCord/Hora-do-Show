const router = require("express").Router();
const mongoose = require("mongoose");
const authMiddleware = require("../middlewares/auth");
const Exercicio = mongoose.model("Exercicio");
const Treino = mongoose.model("Treino");


  //CRIAR UM TREINO
  router.post("/create", function(req, res) {
    Treino.create(req.body)
      .then(function(dbTreino) {
        // If we were able to successfully create a Product, send it back to the client
        res.json(dbTreino);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

//PEGAR A LISTA DE TreinoS
router.get("/get", function(req,res) {
    Treino.find({})
    .then(function(dbTreinos) {
      res.json(dbTreinos);
    })
    .catch(function(err) {
      res.json(err);
    })
  });
  
  //PEGAR UMA Treino POR ID
  router.get("/get/id/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
      Treino.findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("exercicios")
      .then(function(dbTreino) {
        // If we were able to successfully find an Product with the given id, send it back to the client
        res.json(dbTreino);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  //PEGAR UMA Treino POR NOME
  router.get("/get/nome/:nome", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
      Treino.findOne({ tipo_treino: req.params.nome })
      // ..and populate all of the notes associated with it
      .populate("exercicios")
      .then(function(dbTreino) {
        // If we were able to successfully find an Product with the given id, send it back to the client
        res.json(dbTreino);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  
  
  //LINKANDO ALIMENTO E DIETA POR NOMES
  router.post("/link/:idTreino/:idExercicio", async(req, res) => {
    
    try{
    const treino = await Treino.findById(req.params.idTreino)
    const exercicio = await Exercicio.findById(req.params.idExercicio)
    console.log(treino._id)
    console.log(exercicio._id)
    exercicio.treinos.push(treino._id)
    exercicio.save();
    treino.exercicios.push(exercicio._id)
    treino.save();
    res.json(treino)
    } catch(err){
      console.log(err)
      res.json(err);
    }
  
  });

  router.use(authMiddleware);
  module.exports = router;