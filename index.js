// Write your solution in this file!
const employee = {
    name: "Joe",
    streetAddress: "Not Joe",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee };

    newEmployee[key] = value;


    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
  
    return obj;
  }
function deleteFromEmployeeByKey(obj, key, value){
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;

};
function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    delete obj[key];
    return obj;
};