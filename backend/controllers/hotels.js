const Hotel = require('../models/Hotel');

// Get all hotels
exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new hotel
exports.createHotel = async (req, res) => {
    const hotel = new Hotel(req.body);
    try {
        const savedHotel = await hotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get hotel by ID
exports.getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (hotel == null) {
            return res.status(404).json({ message: 'Cannot find hotel' });
        }
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a hotel
exports.updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (hotel == null) {
            return res.status(404).json({ message: 'Cannot find hotel' });
        }
        res.status(200).json(hotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a hotel
exports.deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (hotel == null) {
            return res.status(404).json({ message: 'Cannot find hotel' });
        }
        res.status(200).json({ message: 'Deleted hotel' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
