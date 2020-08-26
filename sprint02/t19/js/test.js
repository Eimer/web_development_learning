const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

describe("checkBrackets", function() {
    it("test1", function() {
        assert.equal(checkBrackets('1(2'), '1');
    });
});