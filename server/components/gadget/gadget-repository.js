class GadgetRepository {
  constructor(dependencies) {
    this.Gadget = dependencies.Gadget;
  }

  async getAllGadgets() {
    const gadgets = await this.Gadget.find({});
    return gadgets;
  }
}

module.exports = GadgetRepository;
