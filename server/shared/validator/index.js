const mongoose = require('mongoose');

class Validator {
  static validateObjectId(id) {
    return mongoose.Types.ObjectId.isValid(id);
  }
}

module.exports = Validator;
