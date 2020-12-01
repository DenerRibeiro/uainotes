const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

//Get route files
const provider = require('./api/routes/provider');
const product = require('./api/routes/product');
const contato = require('./api/routes/contato');

dotenv.config({ path: './api/config/config' });

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

//mount routes
app.use('/providers', provider);
app.use('/products', product);
app.use('/contatos', contato);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

module.exports = app;
