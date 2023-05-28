const express = require("express");
const router = express.Router();
const {
  getAllProperties,
  getSelectedProperty,
  saveProperty,
  updateProperty,
  deleteProperty,
} = require("../../controllers/propertyControllers.js");

router.route("/").get(getAllProperties).post(saveProperty);
router
  .route("/:id")
  .get(getSelectedProperty)
  .put(updateProperty)
  .delete(deleteProperty);

module.exports = router;
