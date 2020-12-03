const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const dotenv = require('dotenv');
dotenv.config();

describe('Delete', () => {
  it('Delete lembrete', (done) => {
    chai
      .request('localhost:3000')
      .delete(`/lembretes/${process.env.LEMBRETE_ID}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Deleta Tarefa', (done) => {
    chai
      .request('localhost:3000')
      .delete(`/tarefas/${process.env.TAREFA_ID}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Delete contato', (done) => {
    chai
      .request('localhost:3000')
      .delete(`/contatos/${process.env.CONTATO_ID}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });


  it('Deleta Categoria', (done) => {
    chai
      .request('localhost:3000')
      .delete(`/categorias/${process.env.CATEGORIA_ID}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

});
