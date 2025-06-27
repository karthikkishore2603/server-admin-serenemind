const express = require('express');
const router = express.Router();
const stateController = require('../controllers/stateController');

router.get('/', stateController.getAllStates);
router.post('/', stateController.createState);
router.patch('/:id/toggle-status', stateController.toggleStateStatus);

module.exports = router;