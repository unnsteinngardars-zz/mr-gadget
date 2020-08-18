const mongoose = require('mongoose');

const { Schema } = mongoose;

const gadgetSchema = new Schema({
  name: String,
  price: String,
  body_location: String,
  category: String,
  company: {
    name: String,
    url: String,
    mapping_location: String,
    city: String,
    u_s_state: String,
    country: String,
  },
  image: String,
});

module.exports = mongoose.model('Gadget', gadgetSchema);
