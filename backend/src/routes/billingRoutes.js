//src/routes/billingRoutes.js 

const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.post('/generate', billingController.generateBill);
router.get('/:id', billingController.getBill);
module.exports = router;

