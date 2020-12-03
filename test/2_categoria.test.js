const chai = require('chai');
const chaiHttp = require('chai-http');
const { Categoria } = require('../src/models');
const should = chai.should();
chai.use(chaiHttp);
const dotenv = require('dotenv');
dotenv.config();

describe('Categoria', () => {
  it('Adiciona Categoria', (done) => {
    const newCategoria = {
      nome: `Categoria`,
    };
    chai
      .request('localhost:3000')
      .post('/categorias')
      .set('content-type', 'application/json')
      .send(newCategoria)
      .end((err, res) => {
        process.env.CATEGORIA_ID = res.body.categoriaData.categoriaId;
        res.should.have.status(201);
        done();
      });
  });

  it('Altera Categoria', (done) => {
    const newCategoria = {
      nome: `Novo nome de categoria`,
    };
    chai
      .request('localhost:3000')
      .put(`/categorias/${process.env.CATEGORIA_ID}`)
      .set('content-type', 'application/json')
      .send(newCategoria)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Busca todas Categorias', (done) => {
    chai
      .request('localhost:3000')
      .get(`/categorias/`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Busca uma Categoria', (done) => {
    chai
      .request('localhost:3000')
      .get(`/categorias/${process.env.CATEGORIA_ID}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

});
