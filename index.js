// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "12 Broadway",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updatedEmployee = {
        ...obj,
        [key]: value,
    };
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
}
function deleteFromEmployeeByKey(obj, key, value) {
    const updatedEmployee = {
       key: value,
    };
    delete key.value;
    return updatedEmployee
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
