const { Division } = require("../models");

// CREATE
exports.createDivision = async (req, res) => {
  try {
    const division = await Division.create(req.body);
    res.status(201).json(division);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getDivisions = async (req, res) => {
  try {
    const divisions = await Division.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(divisions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getDivisionById = async (req, res) => {
  try {
    const division = await Division.findByPk(req.params.id);
    if (!division) return res.status(404).json({ error: "Division not found" });
    res.json(division);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateDivision = async (req, res) => {
  try {
    const division = await Division.findByPk(req.params.id);
    if (!division) return res.status(404).json({ error: "Division not found" });
    await division.update(req.body);
    res.json(division);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteDivision = async (req, res) => {
  try {
    const division = await Division.findByPk(req.params.id);
    if (!division) return res.status(404).json({ error: "Division not found" });
    await division.destroy();
    res.json({ message: "Division deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// TOGGLE STATUS
exports.toggleStatus = async (req, res) => {
  try {
    const division = await Division.findByPk(req.params.id);
    if (!division) return res.status(404).json({ error: "Division not found" });

    division.status = !division.status;
    await division.save();

    res.json(division);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
