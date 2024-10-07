const express = require('express');
const router = express.Router();
const { activateSIM, deactivateSIM, getSIMDetails } = require('../controllers/simController');

router.post('/activate', activateSIM);
router.post('/deactivate', deactivateSIM);
router.get('/sim-details/:simNumber', getSIMDetails);

module.exports = router;
