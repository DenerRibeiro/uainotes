const chai = require('chai');
const server = require('../src/index');
// const Provider = require('../src/models/Provider');
// const Product = require('../src/models/Product');
// const Payment = require('../src/models/Payment');
const { Product } = require('../src/models');
const chaiHttp = require('chai-http');
const should = chai.should();
// const Chance = require('chance');
// const chance = new Chance();

// chai.use(chaiHttp);
// let randName = chance.string();

describe('Product', () => {
  let id = 0;

  it('Create Product', (done) => {
    const newProduct = {
      name: `PRODUTO`,
    };
    console.log(newProduct.name);
    chai
      .request(server)
      .post('/products')
      .set('content-type', 'application/json')
      .send(newProduct)
      .end((err, res) => {
        id = res.body.productId;
        res.should.have.status(201);
        done();
      });
  });

  it('Find All Product', (done) => {
    chai
      .request(server)
      .get('/products')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Find One Product', (done) => {
    chai
      .request(server)
      .get(`/products/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Update Product', (done) => {
    const updatedProduct = {
      name: `PRODUTO MUDADO`,
    };
    chai
      .request(server)
      .put(`/products/${id}`)
      .set('content-type', 'application/json')
      .send(updatedProduct)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Delete Product', (done) => {
    chai
      .request(server)
      .delete(`/products/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
