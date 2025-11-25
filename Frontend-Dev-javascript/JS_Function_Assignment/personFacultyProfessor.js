function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return "Name: " + this.name;
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.getDepartment = function () {
  return "Department: " + this.department;
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getSubject = function () {
  return "Subject: " + this.subject;
};

const prof = new Professor("Brajesh Kumar", "CSE", "DSA");

console.log(prof.getName());
console.log(prof.getDepartment());
console.log(prof.getSubject());
console.log(prof.__proto__.__proto__.__proto__ === Person.prototype);
