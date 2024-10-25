// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  return [
    {
      firstName: 'Eva',
      lastName: 'Wolfe',
      salary: '10'
    },
    {
      firstName: 'Ross',
      lastName: 'King',
      salary: '5'
    },
    {
      firstName: 'Stephen',
      lastName: 'Soper',
      salary: '8'
    },
  ]
  //KEEP THIS!//
  let gather = true;
  const employeeData = [];
  while (gather) {

    // TODO: Get user input to create and return an array of employee objects
    const firstName = window.prompt("Employee First Name");
    const lastName = window.prompt("Employee Last Name");
    const salary = window.prompt("Salary");

    const employee = {
      firstName,
      lastName,
      salary
    };
    employeeData.push(employee);
    gather = window.confirm("Add another employee?")
  };
  console.log(employeeData);
  return employeeData;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  const employeeSalaries = [];
  for (const employee of employeesArray) {
    employeeSalaries.push(employee.salary);
  };
  let total = 0;
  for (const salary of employeeSalaries) {
    total += +salary;
  }
  let average = total / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employees is ${average}.`)
};


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
