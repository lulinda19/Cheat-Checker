const router = require('express').Router();
let Homework = require('../models/homework.model');

// Get a list of all homeworks in database
router.route('/').get((req, res) => {
    Homework.find()
      .then(homeworks => res.json(homeworks))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  // Get a list of all questions for homework in database
  router.route('/questions').get((req, res) => {
    let arr = [];
    Homework.findOne({name: req.query.name})
      .then(homework => {homework.questions.forEach((question) =>
      arr.push(question.questionText));
      res.json(arr);
    })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

router.route('/addQuestion').post((req, res) => {
    Homework.findOne({name: req.body.homeworkName})
      .then((homework) => {
        if (homework.courseCode == req.body.joinCode) {
          homework.questions.push({number: req.body.questionNumber, questionText: req.body.questionText, submissions: []});
          homework.save()
            .then(() => res.sendStatus(200))
            .catch(err => res.status(400).json(`Error: ${err}`));
        } else {
          res.sendStatus(291);
        }
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addAnswer').post((req, res) => {
  Homework.findOne({name: req.body.homeworkName})
    .then((homework) => {
      if (homework.courseCode == req.body.joinCode) {
        if (homework.name == req.body.homeworkName) {
          let b = true;
          homework.questions.forEach((question) => {
            if (question.number == req.body.questionNumber) {
              question.submissions.push({email: req.body.email, answerText: req.body.answer});
              b = false;
            }
          });
          if (b) {
            res.sendStatus(291);
          }
          } else {
            res.sendStatus(291);
          }
      homework.save()
      .then(() => res.sendStatus(200))
      .catch(err => res.status(400).json(`Error: ${err}`));
      } else {
        res.sendStatus(291);
      }
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;