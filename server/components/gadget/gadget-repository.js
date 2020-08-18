class GadgetRepository {
  constructor(dependencies) {
    this.Gadget = dependencies.Gadget;
  }

  async getAllGadgets() {
    const gadgets = await this.Gadget.find({});
    return gadgets;
  }

  async getGadgetById(id) {
    const gadget = await this.Gadget.findById(id);
    return gadget;
  }
}

module.exports = GadgetRepository;
