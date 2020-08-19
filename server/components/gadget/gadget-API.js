const express = require('express');
const Gadget = require('./gadget');
const GadgetRepository = require('./gadget-repository');
const GadgetService = require('./gadget-service');
const GadgetController = require('./gadget-controller');

const Validator = require('../../shared/validator');

const router = express.Router();
const gadgetRepository = new GadgetRepository({ Gadget });
const gadgetService = new GadgetService({ gadgetRepository, Validator });
const gadgetController = new GadgetController({ gadgetService });

router.get('/', gadgetController.getAllGadgets.bind(gadgetController));
router.get('/:id', gadgetController.getGadgetById.bind(gadgetController));

module.exports = router;
