const bcrypt = require("bcrypt");
const User = require("../models/user/User.js");

const fetchUser = async (req, res) => {
  const user = await User.find((user) => user.email === req.body.email);
  if (user === null) {
    return res.status(400).send("Usuario no encontrado");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("usuario verificado");
    } else {
      res.send("no autorizado");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Error de servidor");
  }
};
module.exports = { fetchUser };
