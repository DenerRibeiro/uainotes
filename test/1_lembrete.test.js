const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const dotenv = require('dotenv');
dotenv.config();

describe('Lembrete', () => {
  it('Adiciona lembrete', (done) => {
    const newlembrete = {
      data: "30/12/2020",
      hora: "22:57",
      titulo: "ECO>ECA",
      contatoId: process.env.CONTATO_ID
    };
    chai
      .request('localhost:3000')
      .post('/lembretes')
      .set('content-type', 'application/json')
      .send(newlembrete)
      .end((err, res) => {
        process.env.LEMBRETE_ID = res.body.lembreteData.lembreteId;
        res.should.have.status(201);
        done();
      });
  });

  it('Busca todos lembretes', (done) => {
    chai
      .request('localhost:3000')
      .get('/lembretes')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Busca um lembrete', (done) => {
    chai
      .request('localhost:3000')
      .get(`/lembretes/${process.env.LEMBRETE_ID}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Altera lembrete', (done) => {
    const newlembrete = {
      data: '06/12/2020',
      hora: '12:00',
      titulo: 'Mais Novo lembrete ',
      contatoId: process.env.CONTATO_ID
    };
    chai
      .request('localhost:3000')
      .put(`/lembretes/${process.env.LEMBRETE_ID}`)
      .set('content-type', 'application/json')
      .send(newlembrete)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
