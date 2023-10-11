const express = require('express');
const { dailyCheckinModel } = require('../model/daily-checkin-model');

const dailyCheckinRoute = express.Router();

dailyCheckinRoute.post('/post', async (req, res) => {
    try {
        const newCheckin = new dailyCheckinModel(req.body);
        const saveDailyCheckin = await newCheckin.save();
        res.status(201).json({ message: "dailyCheckin data posted successfully", data: saveDailyCheckin, status: true });
    } catch (error) {
        res.status(500).json({ error: 'Could not post dailyCheckin data', status: false });
    }
});

dailyCheckinRoute.get('/', async (req, res) => {
    try {
        const Checkins = await dailyCheckinModel.find();
        res.status(200).json({ message: "dailyCheckins retrieved successfully", data: Checkins, status: true });
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve dailyCheckins data', status: false });
    }
});

module.exports = {dailyCheckinRoute}

