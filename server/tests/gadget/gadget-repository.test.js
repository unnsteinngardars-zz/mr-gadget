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
});
