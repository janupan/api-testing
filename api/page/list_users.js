const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const getUsersList = () => api.get('/api/users?page=2')

const getUsersInvalidPath = () => api.get('/api/usersa?page=2')

const getUsersNotMatchingHttpMethods = () => api.post('/api/users?page=2')

const getUsersNotMatchingHttpMethodsPatch = () => api.patch('/api/users?page=2')

module.exports = {
    getUsersList,
    getUsersInvalidPath,
    getUsersNotMatchingHttpMethods,
    getUsersNotMatchingHttpMethodsPatch
}