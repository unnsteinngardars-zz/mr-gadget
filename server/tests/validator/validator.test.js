const { expect } = require('chai');
const Validator = require('../../shared/validator');

describe('Validator', () => {
  describe('validateObjectId', () => {
    it('should return true if id is a valid ObjectId', () => {
      expect(Validator.validateObjectId('5f3beb5f928f3fac84e0adb0')).to.equal(true);
    });
    it('should return false if id is an invalid ObjectId', () => {
      expect(Validator.validateObjectId('1')).to.equal(false);
    });
  });
});
