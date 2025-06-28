const { AcademicYear } = require("../models");

// CREATE
exports.createAcademicYear = async (req, res) => {
  try {
    const academicYear = await AcademicYear.create(req.body);
    res.status(201).json(academicYear);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAcademicYears = async (req, res) => {
  try {
    const academicYears = await AcademicYear.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(academicYears);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getAcademicYearById = async (req, res) => {
  try {
    const academicYear = await AcademicYear.findByPk(req.params.id);
    if (!academicYear)
      return res.status(404).json({ error: "Academic Year not found" });
    res.json(academicYear);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateAcademicYear = async (req, res) => {
  try {
    const academicYear = await AcademicYear.findByPk(req.params.id);
    if (!academicYear)
      return res.status(404).json({ error: "Academic Year not found" });
    await academicYear.update(req.body);
    res.json(academicYear);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteAcademicYear = async (req, res) => {
  try {
    const academicYear = await AcademicYear.findByPk(req.params.id);
    if (!academicYear)
      return res.status(404).json({ error: "Academic Year not found" });
    await academicYear.destroy();
    res.json({ message: "Academic Year deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// TOGGLE STATUS
exports.toggleStatus = async (req, res) => {
  try {
    const academicYear = await AcademicYear.findByPk(req.params.id);
    if (!academicYear)
      return res.status(404).json({ error: "Academic Year not found" });

    academicYear.status = !academicYear.status;
    await academicYear.save();

    res.json(academicYear);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
