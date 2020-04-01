const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseModelSchema = new Schema({
    name: { type: String, required: true, trim: true, minlength: 1 },
    joinCode: { type: String, unique: true},
    universalKeywords: [{ type: String, trim: true}],
    // TODO: figure out how to reference to students and instructors
    students: {},
    instructors: {},
    //TODO: figure out how to embed homework schema
    homeworks: {},
    matches: {},
    flaggedStudents: {},
    flaggedStackExchangeUsers: {}
}, {
    timestamps : true
});