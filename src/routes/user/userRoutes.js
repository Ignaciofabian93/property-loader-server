const express = require("express");
const router = express.Router();
const { createUser } = require("../../controllers/userControllers.js");

router.route("/").post(createUser);

module.exports = router;
