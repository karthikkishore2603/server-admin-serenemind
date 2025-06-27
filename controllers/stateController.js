const db = require('../models');
const { Op } = require('sequelize');

exports.getAllStates = async (req, res) => {
  try {
    const { search } = req.query;
    let whereCondition = {};
    
    if (search) {
      whereCondition = {
        name: {
          [Op.iLike]: `%${search}%`
        }
      };
    }

    const states = await db.State.findAll({ 
      where: whereCondition,
      include: [{
        model: db.Country,
        attributes: ['countryName']
      }]
    });
    res.json(states);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createState = async (req, res) => {
  try {
    const { name, countryId } = req.body;
    
    if (!name || !countryId) {
      return res.status(400).json({ error: 'Name and countryId are required' });
    }

    const newState = await db.State.create({ name, countryId });
    res.status(201).json(newState);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.toggleStateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const state = await db.State.findByPk(id);
    
    if (!state) {
      return res.status(404).json({ error: 'State not found' });
    }

    state.status = !state.status;
    await state.save();
    
    res.json(state);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};