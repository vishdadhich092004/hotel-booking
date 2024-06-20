const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const app = express();

// Connect to Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch(err => {
        console.error('Connection error', err.message);
    });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());
// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views')); // Ensure correct path

// Routes
const hotelRoutes = require('./routes/hotelRoutes');
app.use('/hotels', hotelRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
