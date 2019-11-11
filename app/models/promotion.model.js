const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promotionSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    idNumber: String,
    address: String,
    state: String,
    longitude: String,
    latitude: String,
    promotionCode: String,
    datetime: String
});

const Promotion = mongoose.model('promotion', promotionSchema);
module.exports = Promotion;