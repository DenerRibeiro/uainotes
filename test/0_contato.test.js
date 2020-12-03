const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const dotenv = require('dotenv');
dotenv.config();

describe('Contato', () => {
  it('Adiciona contato', (done) => {
    const newcontato = {
      nome: "NovoContato",
      email: "novocontato@gmail.com",
      endereco: "Ruanova",
      telefone: "99999999",
      celular: "99999999",
    };
    chai
      .request('localhost:3000')
      .post('/contatos')
      .set('content-type', 'application/json')
      .send(newcontato)
      .end((err, res) => {
        process.env.CONTATO_ID = res.body.contatoDados.contatoId;
        res.should.have.status(201);
        done();
      });
  });

  it('Busca todos contatos', (done) => {
    chai
      .request('localhost:3000')
      .get('/contatos')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Busca um contato', (done) => {
    chai
      .request('localhost:3000')
      .get(`/contatos/${process.env.CONTATO_ID}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Altera contato', (done) => {
    const newcontato = {
      nome: "Mais NovoContato",
      email: "maisnovocontato@gmail.com",
      endereco: "RuaMaisnova",
      telefone: "66666666",
      celular: "66666666",
    }
    chai
      .request('localhost:3000')
      .put(`/contatos/${process.env.CONTATO_ID}`)
      .set('content-type', 'application/json')
      .send(newcontato)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

});
