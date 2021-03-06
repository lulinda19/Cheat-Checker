var mongoose = require('mongoose');

// the host:port must match the location where you are running MongoDB
// the "myDatabase" part can be anything you like
mongoose.connect('mongodb://localhost:27017/myDatabase');

var Schema = mongoose.Schema;

var instructorSchema = new Schema({
        // instructor email, used as unique identifier amongst instructors, though not necessarily amongst students
	email: {type: String, required: true, trim: true, unique: true,default: "lampshade@gmail.com"},
        // instructor password, as of now there are no requirements for the password
	password: {type: String, required: true, default: "lampyLamp"},
        firstName: { type: String, default: "Mango" },
        lastName: { type: String, default: "Mangosteen" },
        courses: [{ type: String }],
    });

// export instructorSchema as a class called Instructor
module.exports = mongoose.model('Instructor', instructorSchema);

// we can add additional methods here
