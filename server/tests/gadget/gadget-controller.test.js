const { expect } = require('chai');
const GadgetController = require('../../components/gadget/gadget-controller');
const getMockData = require('../data/mock-data');

describe('GadgetController', () => {
  describe('getAllGadgets', () => {
    it('should return an array of gadgets', async () => {
      const expected = getMockData();
      const res = {
        send: () => expected,
      };
      const gadgetService = {
        getAllGadgets: () => expected,
      };
      const gadgetController = new GadgetController({ gadgetService });
      const gadgets = await gadgetController.getAllGadgets(null, res);
      expect(gadgets).to.equal(expected);
      expect(gadgets.length).to.equal(2);
    });
  });
});
