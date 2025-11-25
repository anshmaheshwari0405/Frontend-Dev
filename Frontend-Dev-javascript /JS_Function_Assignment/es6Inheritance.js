class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showPerson() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
  showStudent() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  }
}

const s1 = new Student("Ishendra", 20, "BTech");
s1.showPerson();
s1.showStudent();

function PersonOld(name, age) {
  this.name = name;
  this.age = age;
}

PersonOld.prototype.showPerson = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

function StudentOld(name, age, course) {
  PersonOld.call(this, name, age);
  this.course = course;
}

StudentOld.prototype = Object.create(PersonOld.prototype);
StudentOld.prototype.constructor = StudentOld;

StudentOld.prototype.showStudent = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
};

const s2 = new StudentOld("Rohan", 22, "MCA");
s2.showPerson();
s2.showStudent();
