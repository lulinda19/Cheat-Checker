const router = require('express').Router();
let Instructor = require('../models/instructor.model');

// Get a list of all instructors in database
router.route('/').get((req, res) => {
    Instructor.find()
      .then(instructors => res.json(instructors))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Get an instructor by email
router.route('/:email').get((req, res) => {
    Instructor.findById(req.params.email)
        .then((instructor) => res.json(instructor))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;