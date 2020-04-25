const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: { type: String, required: true, trim: true, minlength: 1 },
    joinCode: { type: String, unique: true},
    universalKeywords: [{ type: String, trim: true }],
    students: [{ type: String, unique: true }],
    instructors: [{ type: String, unique: true }],
    homeworks: [{ type: String, unique: true }],
    flags: [{
        homeworkName: String,
        questionNumber: String,
        username: String,
        student: String,
        keywords: [String],
        url: String
    }],
    universalFlags: [{
        title: String,
        url: String,
        questionId: { type: String, unique: true },
        user: String,
        date: String
    }]
}, {
    timestamps : true
});

module.exports = mongoose.model('Course', courseSchema);