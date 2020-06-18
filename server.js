/* eslint-disable prettier/prettier */
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//docker start mongodb (após reiniciar)

const app = express(); 

mongoose.connect('mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3000);
