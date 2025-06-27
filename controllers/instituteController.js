const { Institute } = require("../models");
const path = require("path");
const fs = require("fs");

// CREATE
exports.createInstitute = async (req, res) => {
  try {
    let imagePath = null;
    if (req.file) {
      imagePath = req.file.filename;
    }
    const institute = await Institute.create({
      ...req.body,
      image: imagePath,
    });
    res.status(201).json(institute);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getInstitutes = async (req, res) => {
  try {
    const institutes = await Institute.findAll();
    res.json(institutes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getInstituteById = async (req, res) => {
  try {
    const institute = await Institute.findByPk(req.params.id);
    if (!institute) return res.status(404).json({ error: "Not found" });
    res.json(institute);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateInstitute = async (req, res) => {
  try {
    const institute = await Institute.findByPk(req.params.id);
    if (!institute) return res.status(404).json({ error: "Not found" });
    let imagePath = institute.image;
    if (req.file) {
      imagePath = req.file.filename;
      // Optionally delete old image file
    }
    await institute.update({ ...req.body, image: imagePath });
    res.json(institute);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteInstitute = async (req, res) => {
  try {
    const institute = await Institute.findByPk(req.params.id);
    if (!institute) return res.status(404).json({ error: "Not found" });
    await institute.destroy();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
