const mongoose = require('mongoose');

const mongoose = mongoose.Schema;

const homeworkSchema = new Schema({
  // Homework name is used as a unique identifier, is required
  name: { type: String, required: true, unique: true, minlength = 1 },
  startMonitoringDate: { type: Date, required: true },
  endMonitoringDate: { type: Date, required: true },
  keywords: [{ type: String, trim: true }],
  questions: [{
    number: Number,
    questionText: String,
    submissions: [{
      email: String,
      answerText: String
    }]
  }]
})

module.exports = mongoose.model('Homework', homeworkSchema);