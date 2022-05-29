const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

console.log(countries.slice(0, 10));
console.log(countries[Math.floor(countries.length / 2) - 1]);
if (countries.length % 2 === 1) {
  console.log(countries.slice(0, Math.floor(countries.length / 2)));
}
