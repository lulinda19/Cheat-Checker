var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema = new Schema({
	    // student email, used as unique identifier for student
	    email: { type: String, required: true, trim: true, unique: true },
        // student password, as of now there are no requirements for the password
        password: { type: String, required: true },
        firstName: { type: String, default: "Nectar" },
        lastName: { type: String, default: "Nectarine" },
        courses: [mongoose.Schema.ObjectId]
    });

// export studentSchema as a class called Student
module.exports = mongoose.model('Student', studentSchema);

// we can add additional methods here
