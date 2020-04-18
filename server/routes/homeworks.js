const router = require('express').Router();
let Homework = require('../models/homework.model');

// Get a list of all homeworks in database
router.route('/').get((req, res) => {
    Homework.find()
      .then(homeworks => res.json(homeworks))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/addQuestion').post((req, res) => {
    Homework.findOne({name: req.body.homeworkName})
      .then((homework) => {
        homework.questions.push({number: req.body.questionNumber, questionText: req.body.questionText, submissions: []}).save()
          .then(() => res.sendStatus(200))
          .catch(err => res.status(400).json(`Error: ${err}`));
        homework.save()
          .then(() => res.sendStatus(200))
          .catch(err => res.status(400).json(`Error: ${err}`));
        res.sendStatus(200);
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;