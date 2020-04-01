var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema = new Schema({
	// student email, used as unique identifier for student
	email: {type: String, required: true, trim: true, unique: true},
        // student password, as of now there are no requirements for the password
        password: {type: String, required: true},
        firstName: { type: String },
        lastName: { type: String },
        // TODO: reference to courses that a student is in and to homework submissions? how to define those?
        courses: {},
        homeworkSubmissions: {}
    });

// export studentSchema as a class called Student
module.exports = mongoose.model('Student', studentSchema);

// we can add additional methods here
