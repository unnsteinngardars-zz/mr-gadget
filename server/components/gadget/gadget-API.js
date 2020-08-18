const express = require('express');
const Gadget = require('./gadget');
const GadgetRepository = require('./gadget-repository');
const GadgetService = require('./gadget-service');
const GadgetController = require('./gadget-controller');

const router = express.Router();
const gadgetRepository = new GadgetRepository({ Gadget });
const gadgetService = new GadgetService({ gadgetRepository });
const gadgetController = new GadgetController({ gadgetService });

router.get('/', gadgetController.getAllGadgets.bind(gadgetController));

module.exports = router;
