const prompt = require("prompt-sync")();

function solveQuadratic(...args) {
  if (!(arguments[0] && arguments[1] && arguments[2])) {
    return [0];
  }
  let root1, root2;

  // take input from the user
  let a = arguments[0];
  let b = arguments[1];
  let c = arguments[2];

  // calculate discriminant
  let discriminant = b * b - 4 * a * c;

  // condition for real and different roots
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  }

  // condition for real and equal roots
  else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  }

  // if roots are not real
  else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
      `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
    );
  }
}
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
function showDateTime() {
  let today = new Date().toUTCString();
  console.log(today);
}
function swapValues(x, y) {
  let temp;
  temp = x;
  x = y;
  y = temp;
  return `${x}, ${y}`;
}

function reverseArray(array) {
  let array1 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    array1.push(arr[i]);
  }
  return array1;
}
function capitalizeArray(array) {
  let upper = [];
  array.forEach((element) => {
    upper.push(element.toUpperCase());
  });
  return upper;
}
function removeItem(index, array) {
  array.splice(index, 1);
  return array;
}

function evensAndOdds(num) {
  return num % 2 === 1 ? "odd" : "even";
}
function sum(...args) {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
}

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function userIdGeneratedByUser() {
  let numCharInput = prompt("number of characters ");
  let numIdInput = prompt("Number of ID ");
  for (let i = 0; i < numIdInput; i++) {
    console.log(makeid(numCharInput));
  }
}

function makeHexa() {
  var result = "";
  var characters = "ABCDEF0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function makergb() {
  return Math.floor(Math.random() * 256);
}

function generateColors(type, num) {
  if (type === "hexa") {
    for (let i = 0; i < num; i++) {
      console.log("#" + makeHexa());
    }
  }
  if (type === "rgb") {
    for (let i = 0; i < num; i++) {
      console.log(
        "rgb (" + makergb() + "," + makergb() + "," + makergb() + ")"
      );
    }
  }
}
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function factorial(num) {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}

function average(arry) {
  let sum = 0;
  let arrIsNum = arry.every((e) => e > 0);
  if (arrIsNum) {
    for (const element of arry) {
      sum += element;
    }
    return sum;
  } else {
    return arrIsNum;
  }
}
