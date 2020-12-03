const chai = require('chai');
const chaiHttp = require('chai-http');
const { Tarefa } = require('../src/models');
const should = chai.should();
chai.use(chaiHttp);
const dotenv = require('dotenv');
dotenv.config();

describe('Tarefa', () => {
  it('Adiciona Tarefa', (done) => {
    const newTarefa = {
      contatoId: process.env.CONTATO_ID,
      categoriaId: process.env.CATEGORIA_ID,
      dataInicio: "30/11/2020",
      dataTermino: "30/12/2020",
      titulo: "ECO>CCO",
      descricao: "engenharia maior que ciencia",
      prioridade: 1
    };
    chai
      .request('localhost:3000')
      .post('/tarefas')
      .set('content-type', 'application/json')
      .send(newTarefa)
      .end((err, res) => {
        process.env.TAREFA_ID = res.body.tarefasData.tarefaId;
        res.should.have.status(201);
        done();
      });
  });

  it('Altera Tarefa', (done) => {
    const newTarefa = {
      contatoId: process.env.CONTATO_ID,
      categoriaId: process.env.CATEGORIA_ID,
      dataInicio: "30/11/2020",
      dataTermino: "30/12/2020",
      titulo: "ECO>>>>>CCO",
      descricao: "faculdade e isso ai",
      prioridade: 1
    };
    chai
      .request('localhost:3000')
      .put(`/tarefas/${process.env.TAREFA_ID}`)
      .set('content-type', 'application/json')
      .send(newTarefa)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Busca todas Tarefas', (done) => {
    chai
      .request('localhost:3000')
      .get(`/tarefas/`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Busca uma Tarefa', (done) => {
    chai
      .request('localhost:3000')
      .get(`/tarefas/${process.env.TAREFA_ID}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

});
