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
        homework.questions.push({number: req.body.questionNumber, questionText: req.body.questionText, submissions: []});
        homework.save()
          .then(() => res.sendStatus(200))
          .catch(err => res.status(400).json(`Error: ${err}`));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addAnswer').post((req, res) => {
  Homework.findOne({name: req.body.homeworkName})
    .then((homework) => {
      if (homework.name == req.body.homeworkName) {
        homework.questions.forEach((question) => {
          if (question.number == req.body.questionNumber) {
            question.submissions.push({email: req.body.email, answerText: req.body.answer});
          }
        });
      }

      homework.save()
      .then(() => res.sendStatus(200))
      .catch(err => res.status(400).json(`Error: ${err}`));
    });
});

module.exports = router;