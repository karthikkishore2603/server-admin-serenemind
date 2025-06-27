const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

router.get('/', cityController.getAllCities);
router.post('/', cityController.createCity);
router.patch('/:id/toggle-status', cityController.toggleCityStatus);

module.exports = router;