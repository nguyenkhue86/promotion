// Define Dependences
const express = require('express');
const router = express.Router();

const promotionsController = require('../controllers/promotions.controller');
// Content
router.route('/')
    .get(promotionsController.getAllPromotions)
    .post(promotionsController.createPromotion);
    
router.route('/:id')
.get(promotionsController.getById);
// Export module
module.exports = router;