const mongoose = require('mongoose');


const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String , required: true, unique: true },
  city: { type: String, required: true },
  country: { type: String, required: true }
});


module.exports = mongoose.model('Restaurant', restaurantSchema);
