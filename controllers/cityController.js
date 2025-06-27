const db = require('../models');
const { Op } = require('sequelize');

exports.getAllCities = async (req, res) => {
  try {
    const { search } = req.query;
    let whereCondition = {};
    
    if (search) {
      whereCondition = {
        city: {
          [Op.iLike]: `%${search}%`,
        },
      };
    }

    const cities = await db.City.findAll({ where: whereCondition });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCity = async (req, res) => {
  try {
    const { country, state, city } = req.body;
    const newCity = await db.City.create({ country, state, city });
    res.status(201).json(newCity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.toggleCityStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await db.City.findByPk(id);
    
    if (!city) {
      return res.status(404).json({ error: 'City not found' });
    }

    city.status = !city.status;
    await city.save();
    
    res.json(city);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};