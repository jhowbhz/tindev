const express = require('express');
const routes = express.Router();

// get, post, put, delete
routes.get('/api/', (requisicao, resposta) => {
    return resposta.json({ mensagem: `Hello World xxxxxxxxxxxxx ${requisicao.query.name}`});
});

routes.post('/api/devs', (requisicao, resposta) => {

    console.log(requisicao.body);
    return resposta.json(requisicao.body);

});

module.exports = routes;