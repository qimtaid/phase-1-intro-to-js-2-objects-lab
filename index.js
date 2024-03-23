// Write your solution in this file!

// Initialize employee Object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee Object non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update employee Object destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from employee Object non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key from employee Object destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  console.log("Initial employee:", employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("Updated employee:", updatedEmployee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Destructively updated employee:", employee);
  
  const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without street address:", employeeWithoutAddress);
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Destructively deleted name from employee:", employee);
  