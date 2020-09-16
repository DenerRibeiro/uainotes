const chai = require('chai');
const chaiHttp = require('chai-http');
const { Provider } = require('../src/models');
const should = chai.should();
const server = require('../src/index');
// const Chance = require('chance');
// const chance = new Chance();
chai.use(chaiHttp);
// const randName = chace.string();

describe('Provider', () => {
  let id = 0;
  it('Create Provider', (done) => {
    const newProvider = {
      name: `PROVIDER2`,
      address: 'PROVIDER ADDRESS',
    };
    chai
      .request(server)
      .post('/providers')
      .set('content-type', 'application/json')
      .send(newProvider)
      .end((err, res) => {
        id = res.body.data.providerId;
        res.should.have.status(201);
        done();
      });
  });

  it('Update Provider', (done) => {
    const newProvider = {
      name: `PROVIDE Updated`,
      address: 'new PROVIDER ADDRESS',
    };
    chai
      .request(server)
      .put(`/providers/${id}`)
      .set('content-type', 'application/json')
      .send(newProvider)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Find All Providers', (done) => {
    chai
      .request(server)
      .get(`/providers/`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Find One Provider', (done) => {
    chai
      .request(server)
      .get(`/providers/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  // it('Delete Provider', (done) => {
  //   chai
  //     .request(server)
  //     .delete(`/providers/${id}`)
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       done();
  //     });
  // });
});
