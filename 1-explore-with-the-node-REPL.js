var crypto = require("crypto")

function randomValue(len) {
  return crypto.randomBytes(Math.ceil(len/2)).toString("hex").slice(0,len);
  
};

var value = randomValue(8);
console.log(value);