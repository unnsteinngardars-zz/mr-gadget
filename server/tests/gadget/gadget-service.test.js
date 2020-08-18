const { expect } = require('chai');
const GadgetService = require('../../components/gadget/gadget-service');
const getMockData = require('../data/mock-data');

describe('GadgetService', () => {
  describe('getAllGadgets', () => {
    it('should return an array of gadgets', async () => {
      const expected = getMockData();
      const gadgetRepository = {
        getAllGadgets: () => expected,
      };

      const gadgetService = new GadgetService({ gadgetRepository });
      const gadgets = await gadgetService.getAllGadgets();

      expect(gadgets).to.equal(expected);
    });
  });
  describe('getGadgetById', () => {
    it('should return a single gadget', async () => {
      const expected = getMockData()[0];
      const { id } = expected;
      const gadgetRepository = {
        getGadgetById: () => expected,
      };

      const gadgetService = new GadgetService({ gadgetRepository });
      const gadget = await gadgetService.getGadgetById(id);

      expect(gadget).to.equal(expected);
    });
  });
});
