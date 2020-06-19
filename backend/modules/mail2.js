const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const {host, port, user, pass} = require('../mail.json')
const path = require('path')
const transport = nodemailer.createTransport({
    host ,
    port,
    auth: {user, pass }
  });

transport.use('compile', hbs({

    viewEngine: {
      extName: '.html',
      partialsDir: path.resolve('./resources/mail/auth'),
      layoutsDir: path.resolve('./resources/mail/auth'),
      defaultLayout: 'preregister_password.html', 
      
  },
  viewPath: path.resolve('./resources/mail/auth'),
  extName: '.html'


}));


module.exports = transport;