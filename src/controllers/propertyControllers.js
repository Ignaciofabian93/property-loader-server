const Property = require("../models/property/Property.js");

const getAllProperties = async (req, res) => {
  const properties = await Property.find();
  res.status(200).json(properties);
};

const getSelectedProperty = async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    res.status(400);
    throw new Error("Propiedad no existente");
  }

  res.status(200).json(property);
};

const saveProperty = async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("No hay información para guardar");
  }

  const property = await Property.create({
    type: req.body.type,
    location: req.body.location,
    state: req.body.state,
    description: req.body.description,
    price: req.body.price,
    images: req.body.images,
    operation: req.body.operation,
  });

  res.status(201).json(property);
};

const updateProperty = async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    res.status(400);
    throw new Error("Propiedad no existente");
  }

  const updatedProperty = await Property.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(201).json(updatedProperty);
};

const deleteProperty = async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    res.status(400);
    throw new Error("Propiedad no existente");
  }
  await Property.findByIdAndDelete(req.params.id);
  res.status(201).json({ message: "Propiedad eliminada" });
};

module.exports = {
  getAllProperties,
  getSelectedProperty,
  saveProperty,
  updateProperty,
  deleteProperty,
};
