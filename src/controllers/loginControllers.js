require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../models/user/User.js");
const jwt = require("jsonwebtoken");

const fetchUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log("user: ", user);
    if (!user) {
      return res.status(400).send("Usuario no encontrado");
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    console.log("isPass: ", isPasswordValid);

    if (isPasswordValid) {
      const accessToken = jwt.sign(user.email, process.env.ACCESS_SECRET_TOKEN);
      console.log("token: ", accessToken);
      res.json({ accessToken });
    } else {
      res.status(403).send("no autorizado");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Error de servidor");
  }
};
module.exports = { fetchUser };
