let numberStore = [0, 1, 2];
let newNumber = 3;

console.log(...numberStore, newNumber);

//oppure...

let lastNumberStore = [...numberStore, newNumber];
console.log(lastNumberStore)