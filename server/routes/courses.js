const router = require('express').Router();
let Course = require('../models/course.model');

// Get a list of all courses in database
router.route('/').get((req, res) => {
    Course.find()
      .then(courses => res.json(courses))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Get a list of all universal keywords in database
router.route('/keywords').get((req, res) => {
  Course.findOne({joinCode: req.query.joinCode})
    .then(course => res.json(course.universalKeywords))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add an answer to a specific homework question
router.route('/addAnswer').post((req, res) => {
  Course.findOne({joinCode: req.body.joinCode})
    .then((course) => {
      let b = true;
      course.homeworks.forEach((homework) => {
        if (homework.name == req.body.homeworkName) {
          homework.questions.forEach((question) => {
            if (question.number == req.body.questionNumber) {
              question.submissions.push({email: req.body.email, answerText: req.body.answer});
              b = false;
            }
          });
        }
      });

      if (b) {
        res.sendStatus(201);
      }
      
      course.save()
        .then(() => res.sendStatus(200))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a homework question to a specific homework
router.route('/addQuestion').post((req, res) => {
  Course.findOne({joinCode: req.body.joinCode})
    .then((course) => {
      let b = true;
      course.homeworks.forEach((homework) => {
        if (homework.name == req.body.homeworkName) {
          homework.questions.forEach((question) => {
            if (question.number == req.body.questionNumber) {
              b = false;
            }
          });

          if (b) {
            homework.questions.push({number: req.body.questionNumber, questionText: req.body.questionText, submissions: []});
            res.sendStatus(200);
          } else {
            res.sendStatus(201);
          }
        }
      });
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;