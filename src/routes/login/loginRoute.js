const express = require("express");
const router = express.Router();
const { fetchUser } = require("../../controllers/loginControllers.js");

router.route("/").post(fetchUser);

module.exports = router;
