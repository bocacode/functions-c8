//function addTwo(a,b) {
// const addTwo = (a,b) => {
//     return a + b
// }

const addTwo = require("./external.js")
const subtract = require("./minus.js")


// const sum = addTwo(3,4)
// console.log(sum)

const total = subtract(10,3)
console.log(total)