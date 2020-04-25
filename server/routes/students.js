const router = require('express').Router();
let Student = require('../models/student.model');

// Get a list of all students in database
router.route('/').get((req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get ONE student by email
router.route('/email/:email').get((req, res) => {
  Student.findOne({ email: req.params.email })
      .then((student) => res.json(student))
      .catch(err => res.status(400).json('Error: ' + err));
});

// Get one student by id
router.route('/id/:id').get((req, res) => {
  Student.findById(id)
      .then((student) => res.json(student))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/enroll/:email/:id').put((req,res) => {
  Student.findOneAndUpdate({email: req.params.email},
    {"$push": {courses: req.params.id}}, function(err, result) {
    if(err){
        res.send(err)
    }
    else{
        res.send(result)
    }
  })
})

// Change student name
router.route('/updateName/:email/:firstName/:lastName').put((req, res) => {
  Student.findOneAndUpdate({ email: req.params.email }, 
      {"$set": { "firstName": req.params.firstName, "lastName": req.params.lastName}}, function (
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

// Authenticate student given email and password. Returns { authentication: boolean }
router.route('/authenticate/:email/:password').get((req, res) => {
  Student.findOne({ email: req.params.email })
    .then((student) => {
      if (req.params.password == student.password) {
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create a student, who is enrolled in no courses by default.
router.route('/create').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const courses = [];

  const newStudent = new Student({ email, password, firstName, lastName, courses });

  newStudent.save()
    .then(() => res.json('New student added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;