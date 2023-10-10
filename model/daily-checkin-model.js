const mongoose = require('mongoose')
const dailyCheckinSchema = mongoose.Schema({
    user_id: String,
    Timestamp: { type: Number, default: Math.floor(Date.now() / 1000) },
    Checkins: {
        Ques1: { Question: String, Answer: String },
        Ques2: { Question: String, Answer: String },
        Ques3: { Question: String, Answer: String }
    }
},
    {
        versionKey: false
    });


const dailyCheckinModel = mongoose.model('dailyCheckins', dailyCheckinSchema)

module.exports = {
    dailyCheckinModel
}