const chai = require('chai');
const server = require('../src/index');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

describe('Payment', () => {
  let id = 0;

  it('Create payment', (done) => {
    const newPayment = {
      date: `16/09/2020`,
      amount: '42.42',
      productId: '1',
      providerId: '1',
    };
    chai
      .request(server)
      .post('/payments')
      .set('content-type', 'application/json')
      .send(newPayment)
      .end((err, res) => {
        id = res.body.data.paymentId;
        res.should.have.status(201);
        done();
      });
  });

  it('Find All Payments', (done) => {
    chai
      .request(server)
      .get('/payments')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Find All Payment by Provider Id', (done) => {
    chai
      .request(server)
      .get(`/payments/providers/1`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Find All Payment by Product Id', (done) => {
    chai
      .request(server)
      .get(`/payments/products/1`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Delete Payment', (done) => {
    chai
      .request(server)
      .delete(`/payments/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
