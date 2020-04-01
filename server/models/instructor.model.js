var mongoose = require('mongoose');

// the host:port must match the location where you are running MongoDB
// the "myDatabase" part can be anything you like
mongoose.connect('mongodb://localhost:27017/myDatabase');

var Schema = mongoose.Schema;

var instructorSchema = new Schema({
        // instructor email, used as unique identifier amongst instructors, though not necessarily amongst students
	email: {type: String, required: true, unique: true},
        // instructor password, as of now there are no requirements for the password
	password: {type: String, required: true},
        firstName: { type: String },
        lastName: { type: String },
        // TODO: complete schema
        courses: {},
    });

// export instructorSchema as a class called Instructor
module.exports = mongoose.model('Instructor', instructorSchema);

// we can add additional methods here
