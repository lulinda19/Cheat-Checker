var mongoose = require('mongoose');

// the host:port must match the location where you are running MongoDB
// the "myDatabase" part can be anything you like
mongoose.connect('mongodb://localhost:27017/myDatabase');

var Schema = mongoose.Schema;

var studentSchema = new Schema({
	// student username, all have to be unique
	username: {type: String, required: true, unique: true},

        // student password, as of now there are no requirements for the password
	password: {type: String, required: true},

        // 6 digit code for the class that they want to join
        class: {type: String}
    });

// export studentSchema as a class called Student
module.exports = mongoose.model('Student', studentSchema);

// we can add additional methods here
