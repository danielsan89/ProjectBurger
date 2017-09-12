const mongoose = require('mongoose');

// const commentsSchema= new mongoose.Schema({
//   text: {type: String, required: true},
//   rating: {type: Number, required: true},
//   user: { type: String, required: true}
// });


const hamburgerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  restaurant: { type: String, required: true},
  image: { type: String, required: true },
  city: { type: String, required: true },
  ingredients: { type: String, required: true },
  approved: { type: Boolean, default: false }
  //user: { type: String, required: true},
  // comments: [commentsSchema]
});

module.exports = mongoose.model('Hamburger', hamburgerSchema);
