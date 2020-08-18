class GadgetController {
  constructor(dependencies) {
    this.gadgetService = dependencies.gadgetService;
  }

  async getAllGadgets(req, res) {
    const gadgets = await this.gadgetService.getAllGadgets();
    return res.send(gadgets);
  }
}

module.exports = GadgetController;
