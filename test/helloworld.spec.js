const request = require('supertest')
const { app } = require('../server');


describe('hello world', () => {
    it('responds with 200', () => {
        return request(app).get('/').then(response => {
            expect(response.statusCode).toBe(200)
        });
    });
});

