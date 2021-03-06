const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
require('dotenv').config({ path: `${__dirname}/../.env` });

//Get route files
const categoria = require('./api/routes/categoria');
const lembrete = require('./api/routes/lembrete');
const contato = require('./api/routes/contato');
const tarefa = require('./api/routes/tarefa');

dotenv.config({ path: './api/config/config' });

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

//mount routes
app.use('/categorias', categoria);
app.use('/lembretes', lembrete);
app.use('/contatos', contato);
app.use('/tarefas', tarefa);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

module.exports = app;
