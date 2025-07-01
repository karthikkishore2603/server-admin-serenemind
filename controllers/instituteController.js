const { Institute } = require("../models");

// CREATE
exports.createInstitute = async (req, res) => {
  try {
    const institute = await Institute.create(req.body);
    res.status(201).json(institute);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getInstitutes = async (req, res) => {
  try {
    const institutes = await Institute.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(institutes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getInstituteById = async (req, res) => {
  try {
    const institute = await Institute.findByPk(req.params.id);
    if (!institute)
      return res.status(404).json({ error: "Institute not found" });
    res.json(institute);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateInstitute = async (req, res) => {
  try {
    const institute = await Institute.findByPk(req.params.id);
    if (!institute)
      return res.status(404).json({ error: "Institute not found" });
    await institute.update(req.body);
    res.json(institute);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteInstitute = async (req, res) => {
  try {
    const institute = await Institute.findByPk(req.params.id);
    if (!institute)
      return res.status(404).json({ error: "Institute not found" });
    await institute.destroy();
    res.json({ message: "Institute deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// TOGGLE STATUS
exports.toggleStatus = async (req, res) => {
  try {
    const institute = await Institute.findByPk(req.params.id);
    if (!institute)
      return res.status(404).json({ error: "Institute not found" });
    institute.status = !institute.status;
    await institute.save();
    res.json(institute);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
