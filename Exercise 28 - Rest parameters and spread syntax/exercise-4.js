function sum(...item) {
  return item.reduce((val1, val2) => val1+val2,0);
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));