let moment = require('moment');
const chalk = require('chalk');
let specifics = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
let day = moment().format('DDDo');
let start = moment().startOf('minute');
let now = moment();
let midnight = moment(now);
midnight.hour(0);
midnight.minute(0);
midnight.second(0);
let seconds = start.diff(midnight, 'seconds')

let savings = moment().isDST();
if (savings === true) {
  savings = "is";
} else {
  savings = "isn't";
}

let leap = moment().isLeapYear()
if (leap === true) {
  leap = "is";
} else {
  leap = "is not";
}


console.log('It is ' + chalk.cyanBright(specifics));
console.log('It is the ' + chalk.magentaBright(day) + ' of the year.');
console.log('It is ' + chalk.cyanBright(seconds) + ' seconds into the day.');
console.log('It ' + chalk.yellowBright(savings) + ' during Daylight Savings Time.');
console.log('It ' + chalk.redBright(leap) + ' a leap year');
