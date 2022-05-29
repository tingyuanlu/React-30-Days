const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log(ages[Math.floor(ages.length / 2)]);
let sum = ages.reduce((pre, cur) => pre + cur, 0);
let avg = sum / ages.length - 1;
console.log(sum / ages.length - 1);
console.log("Range from " + ages[0] + " to " + ages[ages.length - 1]);
