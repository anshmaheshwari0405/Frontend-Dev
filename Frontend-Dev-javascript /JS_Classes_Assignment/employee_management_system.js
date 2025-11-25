class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    const bonus = (this.salary * percent) / 100;
    this.salary += bonus;
  }
}

const employees = [
  new Employee(1, "Ishendra", "IT", 40000),
  new Employee(2, "Ishu", "HR", 35000),
  new Employee(3, "Vinay", "Finance", 50000),
  new Employee(4, "Narendra", "Marketing", 38000),
  new Employee(5, "Chetan", "Support", 30000),
];

employees[0].applyBonus(10);
employees[2].applyBonus(5);

const annualSalaries = employees.map((e) => e.getAnnualSalary());

const totalAnnualPayout = employees.reduce(
  (sum, emp) => sum + emp.getAnnualSalary(),
  0
);

console.log("Annual Salaries:");
annualSalaries.forEach((s) => console.log(s));

console.log("Total Annual Payout:", totalAnnualPayout);
