const router = require("express").Router();
const mongoose = require("mongoose");
const authMiddleware = require("../middlewares/auth");
const crypto = require('crypto')
const User = mongoose.model("User");
const mailer = require('../../backend/modules/mail')
const mailer2 = require('../../backend/modules/mail2')
const generator = require('generate-password');
const Joi = require('@hapi/joi');
const passwordComplexity = require('joi-password-complexity');

const complexityOptions = {
  min: 5,
  max: 250,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 2,
};

function validateUser(user) {
  const schema = Joi.object({
    password: passwordComplexity(complexityOptions)
  });
  return schema.validate(user);
}


router.post('/pre_register', async(req, res ) => {

  const { email } = req.body; 

  try {
    
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "Usuário já existe" });
    }

    const passwordR = generator.generate({
      length: 6,
      numbers: true
  });

    const now = new Date();
    now.setHours(now.getHours() + 1)

    const user = await User.create(req.body);

    await User.findByIdAndUpdate(user.id, {
      '$set': {
        passwordRegister: passwordR,
        passwordRegisterExpires: now, 
      } 
    },
    { new: true, useFindAndModify: false },
    )

    user.passwordRegister = passwordR;

    mailer2.sendMail({
      to: email, 
      from:'edilson.cordeiro@outlook.com',
      template: 'preregister_password',
      subject: 'Senha para Pré-Registro: Hora Do Show',
      context: {passwordR},
    }, 
    (err) => {

      if (err)
          
        return res.status(400).send ({error: 'Nao foi possivel enviar a senha'})
        return res.send()

      })
      
  
    } catch (err) {
    
    res.status(400).send({error: 'Erro no pré registro, tente novamente.'})
  }
})

router.post("/register", async (req, res) => {
  const { email, passwordRegister, password } = req.body;

  const testPassword = validateUser({
    password: password
  })

  if("error" in testPassword)
      return res.status(400).send({error: 'Senha muito fraca.'})

  try {
    const user = await User.findOne({ email })
    .select('+passwordRegister passwordRegisterExpires');
        
          const now = new Date();
          

          if(passwordRegister !== user.passwordRegister) 
           return res.status(400).send({error: 'Senha temporária inválida.'})

          if(now > user.passwordRegisterExpires)
            return res.status(400).send ({error: 'Tempo da senha encerrado, envie o email novamente.'})

          if(passwordRegister === password)
          return res.status(400).send ({error: 'Digite uma senha diferente da anterior.'})
          
          user.password = password 
        
          
          await user.save()

          res.send()
        } catch (err) {
            console.log(err)
            res.status(400).send({error: 'Não foi possivel se registrar, tente novamente.'})
          }
});

router.post("/authenticate", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Usuario nao encontrado" });
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: "Senha errada" });
    }

    return res.json({
      user,
      token: user.generateToken()
    });
  } catch (err) {
    return res.status(400).json({ error: "Falha na autenticação do usuário" });
  }
});

router.post('/forgot_password', async(req, res ) => {

  const { email } = req.body; 

  try {
    const user = await User.findOne({email})

    if (!user) 
      return res.status(400).send({error: 'Usuario nao encotrado'})
    
    const token = crypto.randomBytes(5).toString('hex');

    const now = new Date();
    now.setHours(now.getHours() + 1)

    await User.findByIdAndUpdate(user.id, {
      '$set': {
        passwordResetToken: token,
        passwordResetExpires: now, 
      } 
    },
    { new: true, useFindAndModify: false },
    )

    mailer.sendMail({
      to: email,
      from:'edilson.cordeiro@outlook.com',
      template: 'forgot_password',
      subject:'Esqueceu sua senha? Use esse token',
      context: {token},

    }, (err) => {
      if (err)
        
        return res.status(400).send ({error: 'Nao foi possivel enviar a senha'})
        return res.send()

      })
  } catch (err) {
    res.status(400).send({error: 'Erro on forgot password, please try again'})
  }
})

router.post('/reset_password', async (req, res) => {
  const {email, token, password} = req.body; 

  try {
    console.log("Test 1 " + email + "  " + token + " "  +password)
    const user = await User.findOne({ email })
      .select('+passwordResetToken passwordResetExpires');
      if (!user) 
        return res.status(400).send({error: 'Usuario nao encotrado'})
      if(token !== user.passwordResetToken) 
        return res.status(400).send({error: 'Token invalido.'})
      const now = new Date();
      if(now > user.passwordResetExpires)
        return res.status(400).send ({error: 'Token expirado, gere um novo.'})

      user.password = password; 
      await user.save()
 
      res.send()


  } catch (err) {
    res.status(400).send({error: 'Nao foi possivel resetar a senha, tente novamente.'})
  }
})

router.use(authMiddleware);

router.get("/me", async (req, res) => {
  try {
    const { userId } = req;

    const user = await User.findById(userId);

    return res.json({ user });
  } catch (err) {
    return res.status(400).json({ error: "Can't get user information" });
  }
});

module.exports = router;
