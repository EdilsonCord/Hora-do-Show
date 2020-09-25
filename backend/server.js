const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

 //Conecta no MongoDB*
 mongoose.connect(
  "mongodb+srv://dev:Amendoim123@horadoshow.mk5cc.gcp.mongodb.net/testedb?retryWrites=true&w=majority", 
  {useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true, }
).then(console.log("mongo conectou parece"));



// Carrega o model de Usuário
require("./models/user");
require("./modules/mail");
require("./modules/mail2")
require("./models/treino")
require("./models/exercicios")
require("./models/dieta")
require("./models/alimento")
/* require("./controllers/index")(app); */


app.use(bodyParser.json());

var cors = require('cors')
app.use(cors())


// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));
app.use("/dieta", require("./controllers/dietaController"));
app.use("/alimento", require("./controllers/alimentoController"));

app.use("/treino", require("./controllers/treinoController"));
app.use("/exercicio", require("./controllers/exercicioController"));

app.use("/admin", require("./admin"))

app.listen(3333);