const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  rating: { type: Number, required: true },
  menu: [
    {
      item: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ],
  imageUrl: { type: String }  // Field to store image URL
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
