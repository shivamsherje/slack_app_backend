const express = require('express');
const { dailyCheckinModel } = require('../model/daily-checkin-model');

const dailyCheckinRoute = express.Router();

dailyCheckinRoute.post('/post', async (req, res) => {
    try {
        const newCheckin = new dailyCheckinModel(req.body);
        const saveDailyCheckin = await newCheckin.save();
        res.status(201).json({ message: "Boat created successfully", data: saveDailyCheckin, status: true });
    } catch (error) {
        res.status(500).json({ error: 'Could not create a new boat', status: false });
    }
});

dailyCheckinRoute.get('/', async (req, res) => {
    try {
        const Checkins = await dailyCheckinModel.find();
        res.status(200).json({ message: "Boats retrieved successfully", data: Checkins, status: true });
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve boats', status: false });
    }
});

module.exports = {dailyCheckinRoute}

