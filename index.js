var cron = require('node-cron');
const {updateRewards} = require('./updateRewards.js')
cron.schedule('*/5 * * * * *', () => {
    updateRewards()
    console.log("Job Executed", "⌛️" ,new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}));
  });