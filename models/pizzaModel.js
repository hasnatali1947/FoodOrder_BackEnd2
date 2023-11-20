const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
    name: { type: String, required: true },
    sizes: [String],
    prices: [
      {
        small: Number,
        medium: Number,
        large: Number,
      }
  ],
    category: [String],
    image: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, default: 1 },
  }, {
    timestamps: true,
  });  

const pizzaModel = mongoose.model('pizza', pizzaSchema);

module.exports = pizzaModel;
