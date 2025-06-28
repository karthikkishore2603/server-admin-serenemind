const { School } = require("../models");

// CREATE
exports.createSchool = async (req, res) => {
  try {
    const school = await School.create(req.body);
    res.status(201).json(school);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getSchools = async (req, res) => {
  try {
    const schools = await School.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(schools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getSchoolById = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (!school) return res.status(404).json({ error: "School not found" });
    res.json(school);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateSchool = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (!school) return res.status(404).json({ error: "School not found" });
    await school.update(req.body);
    res.json(school);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteSchool = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (!school) return res.status(404).json({ error: "School not found" });
    await school.destroy();
    res.json({ message: "School deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// TOGGLE STATUS
exports.toggleStatus = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (!school) return res.status(404).json({ error: "School not found" });

    school.status = !school.status;
    await school.save();

    res.json(school);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
