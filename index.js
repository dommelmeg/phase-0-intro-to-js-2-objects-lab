const employee = {
  name: "Meg",
  streetAddress: "2001 Washington",
};

const updateEmployeeWithKeyAndValue = (object, key, value) => {
  return {
    ...object, [key]: value,
  };
}

const newEmployees = updateEmployeeWithKeyAndValue(
  employee,
  "Sam",
  "11 Broadway"
);

const destructivelyUpdateEmployeeWithKeyAndValue = (object, key, value) => {
  object[key] = value;

  return object;
}

const takeTwo = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Sam", "12 Broadway");

const deleteFromEmployeeByKey = (employee, key) => {
  const { [key]: {}, ...rest } = employee

  return rest
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];

  return employee;
}

// const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
//   const { [key]: {}, employee} = employee

//   return employee;
// }