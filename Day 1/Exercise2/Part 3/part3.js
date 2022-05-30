const prompt = require("prompt-sync")();

let monthUserInput = prompt("Enter a Month : ");
let month = monthUserInput.toLowerCase();
switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month} has 31 day.`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month} has 30 day.`);
    break;
  case "february":
    console.log("The February has 28 days.");
    break;
} //#2
