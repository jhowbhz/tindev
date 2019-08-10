const express = require('express');
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')

const routes = express.Router();

routes.post('/api/devs', DevController.store);
routes.post('/api/devs/:devId/likes', LikeController.store);

module.exports = routes;