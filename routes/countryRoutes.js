const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

// Create a new Country
router.post('/', countryController.create);

// Retrieve all Countries
router.get('/', countryController.findAll);

// Update a Country with id
router.put('/:id', countryController.update);

// Update Country status
router.patch('/:id/status', countryController.updateStatus);

module.exports = router;