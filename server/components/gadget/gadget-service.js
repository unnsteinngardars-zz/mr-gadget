class GadgetService {
  constructor(dependencies) {
    this.gadgetRepository = dependencies.gadgetRepository;
  }

  async getAllGadgets() {
    const gadgets = await this.gadgetRepository.getAllGadgets();
    return gadgets;
  }

  async getGadgetById(id) {
    const gadget = await this.gadgetRepository.getGadgetById(id);
    return gadget;
  }
}

module.exports = GadgetService;
