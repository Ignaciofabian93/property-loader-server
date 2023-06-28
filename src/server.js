require("dotenv").config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const bodyParser = require("body-parser");
const connectDatabase = require("./config/DataBase.js");
const propertyRoutes = require("./routes/properties/propertyRoutes.js");
const loginRoutes = require("./routes/login/loginRoute.js");
const userRoutes = require("./routes/user/userRoutes.js");
const authToken = require("./middlewares/authToken.js");
const PORT = process.env.PORT || 5000;

connectDatabase();
const app = express();

const corsOptions = {
  origin: "https://property-loader.vercel.app",
};
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/propiedades", propertyRoutes);
app.use("/", (req, res) => {
  res.status(200).send({ message: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API running");
});

module.exports = app;
