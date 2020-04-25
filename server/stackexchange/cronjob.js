const cron = require('node-cron');

// Runs every hour at minute = m right now
const m = '30';
const cronJob = cron.schedule(`${m} * * * *`, () =>  {
  pullUpdate();
});

// Get updates from stackexchange
const axios = require('axios');
let Course = require('../models/course.model');

const pullUpdate = () => {
  // Get all courses from db and update them
  Course.find()
    .then(courses => {
      courses.forEach(course => updateCourse(course));
    })
    .catch(err => console.log(`General error updating courses in db`));
}

const updateCourse = (course) => {
  console.log(`About to update course ${course.name}`);
  Course.findById(course.id)
    .then(
      mongoCourse => {
        // Make stackexchange api request
        let qString = "";
        if (course.universalKeywords === undefined || course.universalKeywords.length == 0) {
          throw `Course ${course.name} does not contain any keywords: no update.`
        }
        course.universalKeywords.forEach(
          keyword => {
            qString += `+${keyword}`;
          }
        )
        axios.get(`https://api.stackexchange.com/2.2/search/advanced`, {
          params: { q: qString, order: 'desc', sort: 'creation', site: 'math' }
        })
        .then(
            res => {
              for (const item of res.data.items) {
                const universalFlag = {
                  title: item.title,
                  url: item.link,
                  questionId: item.question_id,
                  user: item.owner.display_name,
                  date: item.creation_date
                }
                let repeat = false;
                for (const currFlag of mongoCourse.universalFlags) {
                  // If any flag in database (curr Flag) has same id as flag that we want to add to db (universal flag)
                  // Use double equals because curr flag id is string while universal flag id is number (will be cast automatically)
                  if (currFlag.questionId == universalFlag.questionId) {
                    console.log(`Question with title ${universalFlag.title} already in db`)
                    repeat = true;
                  }
                }
                // Add to database if no duplicate
                if (!repeat) {
                  mongoCourse.universalFlags.push(universalFlag);
                }
              }
              mongoCourse.save()
           }
        ).catch(err => console.log(`Could not update ${course.name} in db`));
      }
    )
    .catch (err => console.log(err));
}

module.exports.cronJob = cronJob;
module.exports.pullStackExchangeUpdate = pullUpdate;