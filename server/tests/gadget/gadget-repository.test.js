const { expect } = require('chai');
const GadgetRepository = require('../../components/gadget/gadget-repository');
const getMockData = require('../data/mock-data');

describe('GadgetRepository', () => {
  describe('getAllGadgets', () => {
    it('should return an array of gadgets', async () => {
      const expected = getMockData();
      const Gadget = {
        find: () => expected,
      };

      const gadgetRepository = new GadgetRepository({ Gadget });
      const gadgets = await gadgetRepository.getAllGadgets();

      expect(gadgets).to.equal(expected);
    });
  });

  describe('getGadgetById', () => {
    it('should return a single gadget', async () => {
      const expected = getMockData()[0];
      const { id } = expected;
      const Gadget = {
        findById: () => expected,
      };

      const gadgetRepository = new GadgetRepository({ Gadget });
      const gadget = await gadgetRepository.getGadgetById(id);

      expect(gadget).to.equal(expected);
    });
  });
});
