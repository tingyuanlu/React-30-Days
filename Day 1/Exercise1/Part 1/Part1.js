/*
let arr = []; //1
let arr1 = [3, 4, 5, 4, 1, 2, 3]; //2
console.log(arr1.length); //3
console.log(arr1[0], arr1[Math.floor(arr1.length / 2)], arr1[arr1.length - 1]); //4
let mixedDataTypes = [2, "hello", true, undefined, { num: 3 }]; //5
let isCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
]; //6
console.log(isCompanies); //7
console.log(isCompanies.length); //8
console.log(isCompanies[0], isCompanies[isCompanies.length - 1]); //9
console.log(isCompanies.toString()); //10
console.log(isCompanies.toString().toUpperCase()); //11
console.log(isCompanies.toString() + "are big IT companies."); //12
console.log(
  isCompanies.includes("Apple") ? "The company" : "the company is not found"
); //13
console.log(isCompanies.sort()); //15
console.log(isCompanies.reverse()); //16

//Array.slice method does not change the contents of the original array.
console.log(isCompanies.slice(isCompanies.length - 4, isCompanies.length)); //17
console.log(isCompanies.slice(0, isCompanies.length - 3)); //18

//19
console.log(isCompanies.splice(1, isCompanies.length - 1)); //20
isCompanies.splice(isCompanies.length / 2, 1); //21

console.log(isCompanies.slice(0, isCompanies.length - 1)); //22
console.log(isCompanies.splice()); //23

*/
/*
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[.,]/g, "").split(" ");

console.log(words);
console.log(words.length);
*/

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Suger");
let filtered = shoppingCart.filter(function (noHoney, index, shoppingCart) {
  return noHoney != "Honey";
});
filtered.splice(3, 1, "Green Tea");

console.log(filtered);
