const AppError = require('../../shared/error-management/app-error');
const errorOptions = require('../../shared/error-management/error-options/http-error-options');

class GadgetService {
  constructor(dependencies) {
    this.gadgetRepository = dependencies.gadgetRepository;
    this.Validator = dependencies.Validator;
  }

  async getAllGadgets() {
    const gadgets = await this.gadgetRepository.getAllGadgets();
    return gadgets;
  }

  async getGadgetById(id) {
    if (this.Validator.validateObjectId(id)) {
      const gadget = await this.gadgetRepository.getGadgetById(id);
      return gadget;
    }
    throw new AppError(errorOptions.invalidObjectId);
  }
}

module.exports = GadgetService;
