// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  const employeesList = []
  let addMoreEmployee = true

  while (addMoreEmployee){

    // Gathering user inputs
    const firstName = prompt("Enter first name:")
    const lastName = prompt("Enter last name:")
    const salaryStr = prompt("Enter salary:")
    const salaryInt = parseFloat(salaryStr)

    //Check if the salary is number
    let validatedSalary

    if (isNaN(salaryInt)){
      validatedSalary = 0
    } else {
      validatedSalary = salaryInt
    }

    //Create an employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: validatedSalary
    }

    // Add new employee to employees' list
    employeesList.push(employee)

    // Ask if user wants to add more employee or not
    addMoreEmployee = confirm("Do you want to add another employee?")
  }
  //Return list object of employees
  console.log("Checking Employee List", employeesList)
  return employeesList
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0

  for (let i = 0; i < employeesArray.length; i++){
    totalSalary += employeesArray[i].salary;
  }
  console.log("Total Salary", totalSalary)

  let averageSalary = 0;
  if(employeesArray.length > 0){
    averageSalary = totalSalary/employeesArray.length
  } 

  console.log(`Number of employees: ${employeesArray.length}`)
  console.log(`Average Salary: ${averageSalary}`)

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  const randomNum = Math.floor(Math.random() * employeesArray.length)
  const randomEmployee = employeesArray[randomNum]
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
