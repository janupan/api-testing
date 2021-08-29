require('dotenv').config();
const { expect } = require('chai');
const chai = require('chai');
const fs = require('fs');
const CreateUserApi = require('../page/create_user.js');
const responseMessageCode = require('../data/responseMessageAndCode.json');
const testData = require('../data/create_user_data.json');
var randomstring = require("randomstring");

const testScenario = {
    describePostUser: 'As an User, I should be able to post user',
    successPostDataUser: 'should success post data with valid request parameter',

    describePostUserNeg: 'As an User, I should not be able to post user',
    failedInvalidPath:'get error when invalid path',
    failedInvalidNotMatchingHttpMethods: 'get error when all requests not matching the whitelist with HTTP response code 405 Method not allowed [GET]',
    failedInvalidNotMatchingHttpMethodsPatch: 'get error when all requests not matching the whitelist with HTTP response code 405 Method not allowed [PATCH]',

};

describe(testScenario.describePostUser, () => {    
    it(`@happy ${testScenario.successPostDataUser}`, async () => {
        body = testData.successCreateUser;
        na_me = 'test_' + randomstring.generate(3); 
        job_ran = 'SQA_' + randomstring.generate(3);
        body.name = na_me;
        body.job = job_ran;
        const response = await CreateUserApi.postUser(body);
        expect(response.status).to.equal(responseMessageCode.successCreated);
        expect(response.body.name).to.equal(body.name);
        expect(response.body.job).to.equal(body.job);
    });
});
