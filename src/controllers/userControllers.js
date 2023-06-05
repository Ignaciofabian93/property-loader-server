const bcrypt = require("bcrypt");
const User = require("../models/user/User.js");

const createUser = async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Debe ingresar los datos");
  }

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500);
    throw new Error("Error de servidor");
  }
};

module.exports = { createUser };
