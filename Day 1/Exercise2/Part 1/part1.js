const prompt = require("prompt-sync")();

const driveAge = prompt("What is your age ? ");
console.log(
  driveAge > 18
    ? "You are old enough to drive"
    : `You are left with ${18 - driveAge} years to drive.`
); //#1

const yourAge = prompt("Enter your age : ");
const myAge = 27;
console.log(`You are ${yourAge - myAge} years older than me.`);
//#2

let a = 4;
let b = 3;
console.log(a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`);
//#3

const num = prompt("Enter a number : ");
console.log(
  num % 2 == 0 ? `${num} is an even number. ` : `${num} is an odd number.`
); //#4
