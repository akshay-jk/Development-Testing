import App from '../app.js';

import Chai from 'chai';
import SuperTest from 'supertest';

describe('Calculator API Testing', () => {
    it('Addition Function Testing', (done) => {
        SuperTest(App)
            .post('/Calc/Add')
            .send({ Operands: [100, 1] })
            .expect(200)
            .then((res) => {
                Chai.expect(res.body.data.value).to.equal(101);
                done();
            }).catch((err) => {
                return done(err);
            })
    })

    it('Subtraction Function Testing', (done) => {
        SuperTest(App)
            .post('/Calc/Subtract')
            .send({ Operands: [100, 1] })
            .expect(200)
            .then((res) => {
                Chai.expect(res.body.data.value).to.equal(99);
                done();
            }).catch((err) => {
                return done(err);
            })
    })

    it('Multiplication Function Testing', (done) => {
        SuperTest(App)
            .post('/Calc/Multiply')
            .send({ Operands: [100, 1] })
            .expect(200)
            .then((res) => {
                Chai.expect(res.body.data.value).to.equal(100);
                done();
            }).catch((err) => {
                return done(err);
            })
    })

    it('Division Function Testing', (done) => {
        SuperTest(App)
            .post('/Calc/Divide')
            .send({ Operands: [100, 1] })
            .expect(200)
            .then((res) => {
                Chai.expect(res.body.data.value).to.equal(100);
                done();
            }).catch((err) => {
                return done(err);
            })
    })
})