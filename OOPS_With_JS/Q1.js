class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  calculateAverage() {
    return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
  }
  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 50) return "C";
    else return "F";
  }
}

const s1 = new Student("Ishendra Rai", [95, 88, 92]);
const s2 = new Student("Aryan Mahor", [76, 81, 79]);
const s3 = new Student("Chetan Anand", [45, 52, 49]);

console.log(s1.name, s1.calculateAverage(), s1.getGrade());
console.log(s2.name, s2.calculateAverage(), s2.getGrade());
console.log(s3.name, s3.calculateAverage(), s3.getGrade());
