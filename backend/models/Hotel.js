const mongoose = require('mongoose');

// Define the schema for the Hotel model
const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availableRooms: {
        type: Number,
        required: true
    },
    amenities: {
        type: [String],
        required: true
    }
});

// Create a Hotel model based on the schema
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
