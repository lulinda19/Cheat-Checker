const cron = require('node-cron');

// Runs every hour at minute = m right now
const m = '*';
const cronJob = cron.schedule(`* ${m} * * * *`, () =>  {
  console.log('I am a task that runs every second now');
}, {
  scheduled: false
});

module.exports = cronJob;