let bonus = 5000;

function calculateSalary() {
  let salary = 40000;
  let isPermanent = true;

  if (isPermanent) {
    salary += bonus;
  }

  console.log("Total Salary: " + salary);
  console.log("Is Permanent: " + isPermanent);
}

calculateSalary();
