const router = require('express').Router();
let Homework = require('../models/homework.model');

// Get a list of all courses in database
router.route('/').get((req, res) => {
    Homework.find()
      .then(courses => res.json(courses))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;