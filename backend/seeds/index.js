const mongoose = require('mongoose');
const Hotel = require('../models/Hotel');
require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch(err => {
        console.error('Connection error', err.message);
    });

// Sample hotel data for seeding
const seedHotel = {
    name: 'Sample Hotel',
    location: 'Delhi',
    images: [
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww'
    ],
    price: 150,
    availableRooms: 5,
    amenities: ['Free Wi-Fi', 'Breakfast Included', 'Swimming Pool'],
};

// Function to seed the database
const seedDb = async () => {
    try {
        // Delete all existing hotels
        await Hotel.deleteMany();

        // Create a new hotel using the sample data and save it to the database
        const hotel = new Hotel(seedHotel);
        await hotel.save();
        console.log("Database seeded with sample hotel");
    } catch (err) {
        console.log("Error seeding database: ", err.message);
    } finally {
        // Close the MongoDB connection when done seeding
        mongoose.connection.close();
    }
}

// Execute the seeding function
seedDb();
