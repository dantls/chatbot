const express = require('express');

const SendMessageController = require('./controllers/SendMessageController');

const routes = express.Router();

routes.post('/messages', SendMessageController.store);

module.exports = routes;