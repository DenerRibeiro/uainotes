const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

//Get route files
const provider = require('./api/routes/provider');
const product = require('./api/routes/product');

dotenv.config({ path: './api/config/config' });

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

//mount routes
app.use('/api/v1/providers', provider);
app.use('/api/v1/products', product);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
