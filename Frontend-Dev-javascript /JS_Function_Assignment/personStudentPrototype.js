function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return "Name: " + this.name;
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getBranch = function () {
  return "Branch: " + this.branch;
};

const student1 = new Student("Ishendra", "CSE");
console.log(student1.getName());
console.log(student1.getBranch());
console.log(student1.__proto__.__proto__ === Person.prototype);
