function sumUntil(maxValue) {
  sum=0;
  for (i=1; i <= maxValue; i++){
   sum= i+sum
  }
  return sum
}

console.log(sumUntil(5));