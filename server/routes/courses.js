const router = require('express').Router();
let Course = require('../models/course.model');

// Get a list of all courses in database
router.route('/').get((req, res) => {
    Course.find()
      .then(courses => res.json(courses))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;