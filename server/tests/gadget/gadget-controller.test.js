const { expect } = require('chai');
const sinon = require('sinon');
const GadgetController = require('../../components/gadget/gadget-controller');
const GadgetService = require('../../components/gadget/gadget-service');
const Validator = require('../../shared/validator');
const getMockData = require('../data/mock-data');
const httpErrorOptions = require('../../shared/error-management/error-options/http-error-options');

describe('GadgetController', () => {
  describe('getAllGadgets', () => {
    it('should return an array of gadgets', async () => {
      const expected = getMockData();
      const res = {
        send: () => expected,
      };
      const spy = sinon.spy(res, 'send');
      const gadgetService = {
        getAllGadgets: () => expected,
      };

      const gadgetController = new GadgetController({ gadgetService });
      const gadgets = await gadgetController.getAllGadgets(null, res);

      expect(gadgets).to.equal(expected);
      expect(spy.getCalls().length).to.equal(1);
      expect(spy.returnValues[0]).to.equal(expected);
    });
  });
  describe('getGadgetById', () => {
    it('should return a single gadget when provided with a valid ObjectId', async () => {
      const expected = getMockData()[0];
      const { id } = expected;
      const res = {
        send: () => expected,
      };
      const spy = sinon.spy(res, 'send');
      const req = {
        params: {
          id,
        },
      };
      const gadgetService = {
        getGadgetById: () => expected,
      };

      const gadgetController = new GadgetController({ gadgetService });
      const gadget = await gadgetController.getGadgetById(req, res);

      expect(gadget).to.equal(expected);
      expect(spy.getCalls().length).to.equal(1);
      expect(spy.returnValues[0]).to.equal(expected);
    });
    it('should return an error object when provided with an invalid ObjectId', async () => {
      const id = '1';
      const expected = {
        description: httpErrorOptions.invalidObjectId.description,
        id,
      };
      const res = {
        send: () => expected,
        statusCode: null,
      };
      const req = {
        params: {
          id,
        },
      };
      const gadgetRepository = {};

      const gadgetService = new GadgetService({ gadgetRepository, Validator });
      const gadgetController = new GadgetController({ gadgetService });
      const errorResponse = await gadgetController.getGadgetById(req, res);

      expect(errorResponse).to.equal(expected);
      expect(res.statusCode).to.equal('400');
    });
  });
});
