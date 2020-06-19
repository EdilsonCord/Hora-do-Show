const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");;


// Conecta no MongoDB
mongoose.connect(
  "mongodb://localhost:27017/auth", 
  {useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true, }
);

// Carrega o model de Usuário
require("./models/user");
require("./modules/mail");
/* require("./controllers/index")(app); */






app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));

app.listen(3333);