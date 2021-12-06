const chai = require('chai');

const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'https://back-conexa.herokuapp.com';
let token;
describe('Get token to authorizate operations with PHOTOS ', () => {
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

})

describe('GET PHOTOS ', () => {
    it('Should receive all the photos', (done) => {
      chai.request(url)
        .get('/photos')
        .set({ 'Authorization': `Bearer ${token}` })
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body.photos).to.be.an('array')
          done();
        });
    });
    
    
  });