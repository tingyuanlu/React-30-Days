class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  set setName(name) {
    this.name = name;
  }
  set setAge(age) {
    this.age = age;
  }
  set setColor(color) {
    this.color = color;
  }
  set setLegs(legs) {
    this.legs = legs;
  }
  get getName() {
    return this.Name;
  }
  get getAge() {
    return this.age;
  }
  get getColor() {
    return this.color;
  }
  get getLegs() {
    return this.legs;
  }
}
class dog extends Animal {
  constructor(name, age, color, legs, breed, gander) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.breed = breed;
    this.gander = gander;
  }
}
