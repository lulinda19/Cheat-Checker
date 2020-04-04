const router = require('express').Router();
let Student = require('../models/student.model');

// Get a list of all students in database
router.route('/').get((req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get a student by email. TODO: test if this endpoint works
router.route('/:email').get((req, res) => {
  Student.findById(req.params.email)
    .then((student) => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a student. TODO: add additional fields when student schema is updated
router.route('/add').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const newStudent = new Student({email, password, firstName, lastName});

  newStudent.save()
    .then(() => res.json('New student added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;