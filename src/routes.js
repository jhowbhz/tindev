const express = require('express');
const routes = express.Router();

// get, post, put, delete
routes.get('/', (requisicao, resposta) => {
    return resposta.json({ mensagem: `/api`});
});

routes.get('/api/', (requisicao, resposta) => {
    return resposta.json({ mensagem: `Olá!!!`});
});

routes.post('/api/devs', (requisicao, resposta) => {

    console.log(requisicao.body);
    return resposta.json(requisicao.body);

});

module.exports = routes;