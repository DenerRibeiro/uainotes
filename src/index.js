const Provider = require('./models/Provider');
const express = require('express');
const dotenv = require('dotenv');
const providerDao = require('./database/dao/providerDao');
const models = require('./models/index');

//Get route files
const providers = require('./api/routes/provider');

dotenv.config({ path: './api/config/config' });

const app = express();

app.use(express.urlencoded({ extended: false }));

//mount routes
app.use('/api/v1/providers', providers);

providerDao.createProvider(models.Provider, {
  name: 'Diego Marques Ribeiro',
  address: 'Villa',
  createdAt: new Date(Date.now()),
  updatedAt: new Date(Date.now()),
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
