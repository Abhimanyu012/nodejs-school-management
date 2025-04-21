const School = require('../models/schoolModel');
const calculateDistance = require('../utils/distanceCalculator'); // Fixed import

// Add School API
exports.addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Validate input
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newSchool = await School.addSchool({ name, address, latitude, longitude });
        res.status(201).json({ message: 'School added successfully', school: newSchool });
    } catch (error) {
        res.status(500).json({ message: 'Error adding school', error: error.message });
    }
};

// List Schools API
exports.listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;

    // Validate input
    if (!latitude || !longitude) {
        return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    try {
        const schools = await School.getAllSchools();
        const sortedSchools = schools.sort((a, b) => {
            const distanceA = calculateDistance(latitude, longitude, a.latitude, a.longitude);
            const distanceB = calculateDistance(latitude, longitude, b.latitude, b.longitude);
            return distanceA - distanceB;
        });
        res.status(200).json(sortedSchools);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving schools', error: error.message });
    }
};