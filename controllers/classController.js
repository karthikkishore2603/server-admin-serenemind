const { ClassData } = require("../models");

// CREATE
exports.createClass = async (req, res) => {
  try {
    const classData = await ClassData.create(req.body);
    res.status(201).json(classData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getClasses = async (req, res) => {
  try {
    const classes = await ClassData.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getClassById = async (req, res) => {
  try {
    const classData = await ClassData.findByPk(req.params.id);
    if (!classData) return res.status(404).json({ error: "Class not found" });
    res.json(classData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateClass = async (req, res) => {
  try {
    const classData = await ClassData.findByPk(req.params.id);
    if (!classData) return res.status(404).json({ error: "Class not found" });
    await classData.update(req.body);
    res.json(classData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteClass = async (req, res) => {
  try {
    const classData = await ClassData.findByPk(req.params.id);
    if (!classData) return res.status(404).json({ error: "Class not found" });
    await classData.destroy();
    res.json({ message: "Class deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// TOGGLE STATUS
exports.toggleStatus = async (req, res) => {
  try {
    const classData = await ClassData.findByPk(req.params.id);
    if (!classData) return res.status(404).json({ error: "Class not found" });

    classData.status = !classData.status;
    await classData.save();

    res.json(classData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
