'use strict'
const express = require('express');
const BuscadorController = require('../controllers/buscador.controllers');

const api = express.Router();

api.post('/find_page', BuscadorController.find_page);

module.exports = api;