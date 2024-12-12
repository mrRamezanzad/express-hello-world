const request = require('supertest')
const { app } = require('../app/controllers/hello_world_controller');


describe('hello world', () => {
    it('responds with 200', () => {
        return request(app).get('/').then(response => {
            console.log('response.statusCode', response.statusCode)
            expect(response.statusCode).toBe(200)
        });
    });
});

