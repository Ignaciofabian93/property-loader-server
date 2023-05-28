const getAllProperties = (req, res) => {
  res.status(200).json({ message: "all properties" });
};

const getSelectedProperty = (req, res) => {
  res.status(200).json({ message: "selected property" });
};

const saveProperty = (req, res) => {
  res.status(201).json({ message: "property saved" });
};

const updateProperty = (req, res) => {
  res.status(201).json({ message: "property updated" });
};

const deleteProperty = (req, res) => {
  res.status(201).json({ message: "property deleted" });
};

module.exports = {
  getAllProperties,
  getSelectedProperty,
  saveProperty,
  updateProperty,
  deleteProperty,
};
