class GadgetService {
  constructor(dependencies) {
    this.gadgetRepository = dependencies.gadgetRepository;
  }

  async getAllGadgets() {
    const gadgets = await this.gadgetRepository.getAllGadgets();
    return gadgets;
  }
}

module.exports = GadgetService;
