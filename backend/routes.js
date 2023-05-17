const express = require('express');
const routes = express.Router();
const cadastro = require('./controllers/cadastro');
const dados = require('./controllers/dados');
const deletar = require('./controllers/deletar');
const atualizar = require('./controllers/atualizar');
const update = require('./controllers/update');

routes.post('/cadastro' , cadastro);
routes.get('/dados' , dados);
routes.delete('/deletar/:id' , deletar);
routes.get('/atualizar/:id' , atualizar)
routes.put('/update' , update);

module.exports = routes;