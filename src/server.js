const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb+srv://root:@Mcd345715@cluster0-dem19.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser:true })


server.use(express.json());
server.use(routes);

var porta = process.env.PORT || 8080;
server.listen(porta);

//server.listen(3333);