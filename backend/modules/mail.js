const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const {host, service, user, pass} = require('../mail.json')
const path = require('path')
const transport = nodemailer.createTransport({
    host,
    service,
    auth: {user, pass}
  });

transport.use('compile', hbs({

    viewEngine: {
      extName: '.html',
      partialsDir: path.resolve('./resources/mail/auth'),
      layoutsDir: path.resolve('./resources/mail/auth'),
      defaultLayout: 'forgot_password.html', 
      
  },
  viewPath: path.resolve('./resources/mail/auth'),
  extName: '.html'


}));


module.exports = transport;