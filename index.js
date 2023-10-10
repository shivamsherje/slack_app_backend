const express = require('express');
const { connection } = require('./config/db');

const { dailyCheckinRoute } = require('./routes/daily-checkin-route')
const cors = require('cors')
const app = express();
app.use(cors())

app.use(express.json());
app.use('/dailyCheckin', dailyCheckinRoute);

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("DB connected");
    } catch (err) {
        console.error(err);
        console.log("DB not connected");
    }
    console.log(`Server is running on port ${process.env.PORT}`);
  });