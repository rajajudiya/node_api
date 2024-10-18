const mongoose = require('mongoose');

// Create a schema for the Product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Productmodel = mongoose.model('Product', productSchema);
// Export the Product model
module.exports = Productmodel;
