require("dotenv").config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const connectDatabase = require("./config/DataBase.js");
const propertyRoutes = require("./routes/properties/propertyRoutes.js");
const loginRoutes = require("./routes/login/loginRoute.js");
const userRoutes = require("./routes/user/userRoutes.js");
const PORT = process.env.PORT || 5000;

connectDatabase();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/propiedades", propertyRoutes);
app.use("/", (req, res) => {
  res.status(200).send({ message: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
