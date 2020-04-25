const router = require('express').Router();
let Course = require('../models/course.model');

// Refresh course flags by scraping from stackexchange
router.route('/refreshFlags').put((req, res) => {
  const pullStackExchangeUpdate = require('../stackexchange/cronjob').pullStackExchangeUpdate;
  pullStackExchangeUpdate();
  res.send('refreshed');
});

// Get a list of all courses in database
router.route('/').get((req, res) => {
    Course.find()
      .then(courses => res.json(courses))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Get a course name given a course id
router.route('/getCourse/:id').get((req,res) => {
  Course.findById(req.params.id)
    .then(course => res.json(course))
    .catch(err => res.status(500).json('Error: ' + err))
})

// Set a join code for course
router.route('/setJoinCode/:id/:joinCode').put((req,res) => {
  Course.findByIdAndUpdate(req.params.id, {"joinCode": req.params.joinCode}, function(err, result) {
    if(err){
        res.send(err)
    }
    else{
        res.send(result)
    }
  })
})

// Add a student id to a course using join code
router.route('/addStudent/:id/:joinCode').put((req,res) => {
  Course.findOneAndUpdate({joinCode: req.params.joinCode},
    {"$push": {students: req.params.id}}, function(err, result) {
    if(err){
        res.send(err)
    }
    else{
        res.send(result)
    }
  })
})

// Add an instructor id to a course using join code
router.route('/addInstructor/:id/:joinCode').put((req,res) => {
  Course.findOneAndUpdate({joinCode: req.params.joinCode},
    {"$push": {instructors: req.params.id}}, function(err, result) {
    if(err){
        res.send(err)
    }
    else{
        res.send(result)
    }
  })
})

// Get a list of all universal keywords in database
router.route('/keywords').get((req, res) => {
  Course.findOne({joinCode: req.query.joinCode})
    .then(course => res.json(course.universalKeywords))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add universal keywords to a course
router.route('/addKeywords').post((req, res) => {
  Course.findOne({joinCode: req.body.joinCode})
    .then((course) => {
      req.body.keywords.forEach((keyword) => course.universalKeywords.push(keyword));
      course.save()
        .then(() => res.sendStatus(200))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get a list of all students in database
router.route('/students').get((req, res) => {
  Course.findOne({joinCode: req.query.joinCode})
    .then(course => res.json(course.students))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get a list of all homeworks in database
router.route('/homeworks').get((req, res) => {
  Course.findOne({joinCode: req.query.joinCode})
    .then(course => res.json(course.homeworks))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get a list of all flags in database
router.route('/flags').get((req, res) => {
  Course.findOne({joinCode: req.query.joinCode})
    .then(course => res.json(course.flags))
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