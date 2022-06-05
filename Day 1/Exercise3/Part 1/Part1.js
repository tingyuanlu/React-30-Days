let dog = {
  name: "Doge",
  size: "big",
  color: "white",
  legs: 4,
  age: 10,
  bark: function () {
    return "bark bark";
  },
  getDogInfo: function () {
    return dog;
  },
};

dog.bread = "golden dodall";
console.log(dog.getDogInfo());
