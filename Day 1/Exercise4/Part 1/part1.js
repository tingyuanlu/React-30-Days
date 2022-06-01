function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

function areaOfCircle(redius) {
  return redius * redius * Math.PI;
}

function convertCelciusToFahrenheit(C) {
  return (C * 9) / 5 + 32;
}

function bmi(kg, height) {
  let bmi = (kg / height) * height;
  switch (bmi) {
    case bmi < 18.5: {
      return "underweight";
    }
    case bmi >= 18.5 && bmi < 24.9: {
      return "normal weight";
    }
    case bmi >= 24 && bmi < 29.9: {
      return "Overweight";
    }
    case bmi > 30: {
      return "Obese";
    }
  }
}
