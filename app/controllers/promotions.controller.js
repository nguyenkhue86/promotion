// Define Dependences
const Promotion = require('../models/promotion.model');



module.exports = {

    /**GET: /promotions */
    getAllPromotions : (req, res, next) => {
        Promotion.find({})
        .then(promotion => {
            res.status(201).json(promotion);
        })
        .catch(error => {
            next(error);
        });
        
    },

    /**GET: /promotions/:id */
    getById: (req, res, next) => {
        Promotion.findById(req.params.id)
        .then(promotion => {
            res.status(201).json(promotion);
        })
        .catch(error => {
            next(error);
        });
    },

    /**POST: /promotions/:id */
    createPromotion: (req, res, next) => {
        const newPromotion = new Promotion(req.body);
        newPromotion.save()
        .then(promotion => {
            res.status(201).json(promotion);
        })
        .catch(error => {
            next(error);
        });
    }
}
