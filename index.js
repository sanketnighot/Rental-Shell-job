var cron = require('node-cron');
require('dotenv/config');
const app = require('./app');
var cron = require('node-cron');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT} ...`);
});
const {updateRewards} = require('./updateRewards.js')
cron.schedule('* * * * *', () => {
    updateRewards()
    console.log("Job Executed", "⌛️" ,new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}));
  });