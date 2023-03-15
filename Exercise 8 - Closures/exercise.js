
function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    let lastNumber = value*number;
    return lastNumber;
  }
  return inner;
}

console.log(multiplyByTwo(4)());
