const router = require('express').Router();
let Homework = require('../models/homework.model');

// Get a list of all homeworks in database
router.route('/').get((req, res) => {
    Homework.find()
      .then(homeworks => res.json(homeworks))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Add a question answer to a specific homework question
router.route('/addAnswer').post((req, res) => {
    Homework.findOne({name: req.body.homeworkName})
        .then((homework) => {
          homework.questions.forEach((question) => {
            if (question.number == req.body.questionNumber) {
              question.submissions.push({email: req.body.email, answerText: req.body.answer});
              res.sendStatus(200);
            }
          });
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;