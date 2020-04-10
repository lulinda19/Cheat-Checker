const router = require('express').Router();
let Homework = require('../models/homework.model');

// Get a list of all homeworks in database
router.route('/').get((req, res) => {
    Homework.find()
      .then(homeworks => res.json(homeworks))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Add a submission to a specific homework


module.exports = router;