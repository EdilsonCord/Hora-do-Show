const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Conecta no MongoDB
mongoose.connect(
  "mongodb://localhost:27017/auth", 
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
app.use("/api", require("./controllers/dietaController"));
app.use("/dieta", require("./controllers/dietaController"));
app.use("/alimento", require("./controllers/alimentoController"));

app.use("/treino", require("./controllers/treinoController"));
app.use("/exercicio", require("./controllers/exercicioController"));

app.listen(3333);