const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

var porta = process.env.PORT || 8080;
app.listen(porta);

//server.listen(3333);