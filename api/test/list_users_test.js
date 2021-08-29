require('dotenv').config();
const { expect } = require('chai');
const chai = require('chai');
const fs = require('fs');
const UsersApi = require('../page/list_users.js');
const responseMessageCode = require('../data/responseMessageAndCode.json');

const testScenario = {
    describeGetListUsers: 'As an User, I should be able to get list user',
    successGetDataListUsers: 'should success get data with valid request parameter',

    describeGetListUsersNeg: 'As an User, I should not be able to get list user',
    failedInvalidPath:'get error when invalid path',
    failedInvalidNotMatchingHttpMethods: 'get error when all requests not matching the whitelist with HTTP response code 405 Method not allowed [POST]',
    failedInvalidNotMatchingHttpMethodsPatch: 'get error when all requests not matching the whitelist with HTTP response code 405 Method not allowed [PATCH]',

};

describe(testScenario.describeGetListUsers, () => {    
    it(`@happy ${testScenario.successGetDataListUsers}`, async () => {
        const response = await UsersApi.getUsersList();
        expect(response.status).to.equal(responseMessageCode.successOk);
    });
});

describe(testScenario.describeGetListUsersNeg, () => {
    it(`@neg ${testScenario.failedInvalidPath}`, async () => {
        const response = await UsersApi.getUsersInvalidPath();
        expect(response.status).to.equal(responseMessageCode.failedNotFound.codeNumber);
        expect(response.body.detail).to.be.equal("Not Found");
    });

    it(`@neg ${testScenario.failedInvalidNotMatchingHttpMethods}`, async () => {
        const response = await UsersApi.getUsersInvalidPath();
        expect(response.status).to.equal(responseMessageCode.failedMethodNotAllowed.codeNumber);
    });

    it(`@neg ${testScenario.failedInvalidNotMatchingHttpMethodsPatch}`, async () => {
        const response = await UsersApi.getUsersNotMatchingHttpMethodsPatch();
        expect(response.status).to.equal(responseMessageCode.failedMethodNotAllowed.codeNumber);
    });
});