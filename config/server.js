const express = require('express');
const consig = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session')

const msg = require('../mod_teste');

const app = express();
app.set('view engine','ejs');
app.set('views','./app/views');
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

//Configurar o express-session como midlleware
app.use(session( {
          secret: 'frasebemdificil',
          resave:false,
          saveUninitialized: false
          })); 


consig()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;