

const { v4: uuidv4 } = require('uuid');

const uniqueId = uuidv4();

console.log(uniqueId); // Output: a unique identifier


const moment = require('moment');

const today = moment().format('YYYY-MM-DD');

console.log(today); // Output: Current date in YYYY-MM-DD format
