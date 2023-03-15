let num2=2;
let num4=4;
let num5=5;
//const sum = function (a, b) {
//  return a + b;
//}

const sum = (a,b) => {return a+b}

//const subtract = function (a, b) {
//  return a - b;
//}

const subtract = (a,b) => {return a-b}

//const multiply = function (a, b) {
//  return a * b;
//}

const multiply = (a,b) => {return a*b}

//const divide = function (a, b) {
// return a / b;
//}

const divide = (a,b) => {return a/b}

//const log = function (value) {
//  console.log(value);
//}

const log = (value) => {console.log(value)}

log(divide(subtract(multiply(sum(num2,num4),sum(num5,num2)),num2),num5))