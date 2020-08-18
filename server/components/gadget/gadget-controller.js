class GadgetController {
  constructor(dependencies) {
    this.gadgetService = dependencies.gadgetService;
  }

  async getAllGadgets(req, res) {
    const gadgets = await this.gadgetService.getAllGadgets();
    return res.send(gadgets);
  }

  async getGadgetById(req, res) {
    const { params: { id } } = req;
    const gadget = await this.gadgetService.getGadgetById(id);
    return res.send(gadget);
  }
}

module.exports = GadgetController;
