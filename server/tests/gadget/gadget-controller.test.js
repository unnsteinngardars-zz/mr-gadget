const { expect } = require('chai');
const sinon = require('sinon');
const GadgetController = require('../../components/gadget/gadget-controller');
const getMockData = require('../data/mock-data');

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
    it('should return a single gadget', async () => {
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
  });
});
