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
    try {
      const gadget = await this.gadgetService.getGadgetById(id);
      return res.send(gadget);
    } catch (error) {
      const { statusCode, description } = error;
      res.statusCode = statusCode;
      return res.send({ id, description });
    }
  }
}

module.exports = GadgetController;
