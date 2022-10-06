//function addTwo(a,b) {
// const addTwo = (a,b) => {
//     return a + b
// }

const addTwo = require("./external.js")

console.log("non of this minus stuff! We don't do negative!")

const sum = addTwo(3,4)
console.log(sum)