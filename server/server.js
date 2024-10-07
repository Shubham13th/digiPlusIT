const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Import routes
const simRoutes = require('./routes/simRoutes'); 
const apiRoutes = require('./routes/apiRoutes');

// Use routes
app.use('/api/sim', simRoutes);
app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
