const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const postUser = (body) => api.post('/api/users')
    .send(body);

const postUserInvalidPath = (body) => api.post('/api/users')
    .send(body);

const postUserNotMatchingHttpMethods = () => api.get('/api/users?page=2')
    .send(body);

const postUserNotMatchingHttpMethodsPatch = () => api.patch('/api/users?page=2')
    .send(body);
    
module.exports = {
    postUser,
    postUserInvalidPath,
    postUserNotMatchingHttpMethods,
    postUserNotMatchingHttpMethodsPatch
}