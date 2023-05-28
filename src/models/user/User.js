const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Por favor ingresa un correo electrónico"],
  },
  password: { type: String, required: [true, "Por favor ingresa contraseña"] },
});

module.exports = mongoose.model("User", userSchema);
