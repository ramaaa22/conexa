const chai = require('chai');

const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'https://back-conexa.herokuapp.com';

let token;
describe('Get token ', () => {
  it('Should get a token', (done) => {
    chai.request(url)
      .post('/users/login')
      .send({ email: 'ramiro.boza@hotmail.com', password: '123456' })
      .end((error, res) => {
        token = res.body.token;
        expect(token).to.be.a.string;
        expect(token).to.not.be.null;
        done();
      });
  });
  it('Show an error because user doesnt exist', (done) => {
    chai.request(url)
      .post('/users/login')
      .send({ email: 'ramiro.boza@gmail.com', password: '123456' })
      .end((error, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

})