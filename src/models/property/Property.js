const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "Ingresa tipo de propiedad"],
  },
  location: {
    type: String,
    required: [true, "Ingresa la ubicación"],
  },
  state: {
    type: String,
    required: [true, "Ingresa el estado de la propiedad"],
  },
  description: {
    type: String,
    required: [true, "Ingresa descripción de la propiedad"],
  },
  price: {
    type: Number,
    required: [true, "Ingresa precio"],
  },
  images: {
    type: [String],
    required: [true, "Ingresa imágenes"],
  },
  operation: {
    type: String,
    required: [true, "Ingresa el tipo de operación"],
  },
});

module.exports = mongoose.model("Property", propertySchema);
