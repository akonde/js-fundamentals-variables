// declare firstName variable
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass
// declare firstName variable
const firstName = 'Jane'
console.log(firstName)

const age = 35
console.log(age)

// do not edit below this line
let firstNameExport = ''
try {
  /* eslint-disable no-undef */
  firstNameExport = firstName
} catch (e) {}

let ageExport = 0
try {
  /* eslint-disable no-undef */
  ageExport = age
} catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
