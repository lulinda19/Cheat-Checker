const router = require('express').Router();
let Student = require('../models/student.model');

// Get a list of all students in database
router.route('/').get((req, res) => {
    Student.find()
      .then(students => res.json(students))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Get a student by email
router.route('/:email').get((req, res) => {
    Student.findById(req.params.email)
        .then((student) => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;