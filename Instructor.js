var mongoose = require('mongoose');

// the host:port must match the location where you are running MongoDB
// the "myDatabase" part can be anything you like
mongoose.connect('mongodb://localhost:27017/myDatabase');

var Schema = mongoose.Schema;

var instructorSchema = new Schema({
        // instructor username, all have to be unique
	username: {type: String, required: true, unique: true},

        // instructor password, as of now there are no requirements for the password
	password: {type: String, required: true},

        // 6 digit code which is generated when the instructor creates a class, for now there can only be one instructor per class
        class: {type: String, unique: true}
    });

// export instructorSchema as a class called Instructor
module.exports = mongoose.model('Instructor', instructorSchema);

// we can add additional methods here
