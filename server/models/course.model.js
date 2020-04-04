const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: { type: String, required: true, trim: true, minlength: 1 },
    joinCode: { type: String, unique: true},
    universalKeywords: [{ type: String, trim: true }],
    students: [mongoose.Schema.ObjectId],
    instructors: [mongoose.Schema.ObjectId],
    homeworks: [mongoose.Schema.ObjectId],
    flags: [{
        homeworkName: String,
        questionNumber: Number,
        username: String,
        student: mongoose.Schema.ObjectId,
        keywords: [String],
        url: String
    }],
}, {
    timestamps : true
});

module.exports = mongoose.model('Course', courseSchema);