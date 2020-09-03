const { Provider } = require('./models');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './api/config/config' });

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello');
});

// console.log(process.env.DB_ROOT_PASSWORD);

Provider.create({
  name: 'José Maria Ribeiro',
  address: 'Ribeirão das Pedras',
  createdAt: new Date(Date.now()),
  updatedAt: new Date(Date.now()),
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
