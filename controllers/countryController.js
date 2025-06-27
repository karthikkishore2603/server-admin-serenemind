const db = require('../models');
const Country = db.Country;

// Create and Save a new Country
exports.create = async (req, res) => {
  try {
    const { countryName, status } = req.body;
    
    // Validate request
    if (!countryName) {
      return res.status(400).send({
        message: "Country name can't be empty!"
      });
    }

    // Create a Country
    const country = {
      countryName,
      status: status || false
    };

    // Save Country in the database
    const data = await Country.create(country);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Country."
    });
  }
};

// Retrieve all Countries from the database
exports.findAll = async (req, res) => {
  try {
    const data = await Country.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving countries."
    });
  }
};

// Update a Country by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;

    const [num] = await Country.update(req.body, {
      where: { id: id }
    });

    if (num === 1) {
      res.send({
        message: "Country was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Country with id=${id}. Maybe Country was not found or req.body is empty!`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Country with id=" + id
    });
  }
};

// Update Country status
exports.updateStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    const [num] = await Country.update({ status }, {
      where: { id: id }
    });

    if (num === 1) {
      res.send({
        message: "Country status was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Country with id=${id}. Maybe Country was not found!`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Country status with id=" + id
    });
  }
};