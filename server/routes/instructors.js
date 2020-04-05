const router = require('express').Router();
let Instructor = require('../models/instructor.model');

// Get a list of all instructors in database
router.route('/').get((req, res) => {
    Instructor.find()
      .then(instructors => res.json(instructors))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Get ONE instructor by email
router.route('/email/:email').get((req, res) => {
    Instructor.findOne({ email: req.params.email })
        .then((instructor) => res.json(instructor))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Authenticate instructor given email and password. Returns { authentication: boolean }
router.route('/authenticate/:email/:password').get((req, res) => {
  Instructor.findOne({ email: req.params.email })
    .then((instructor) => {
      if (req.params.password == instructor.password) {
        res.sendStatus(200);
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create an instructor, who is enrolled in no courses by default.
router.route('/create').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const courses = [];

  const newInstructor = new Instructor({ email, password, firstName, lastName, courses });

  newInstructor.save()
    .then(() => res.json('New instructor added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;