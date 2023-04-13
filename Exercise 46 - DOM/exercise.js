const nameText = document.querySelectorAll(".form-input")[0];
const surnameText = document.querySelectorAll(".form-input")[1];

console.log(nameText.value + " " + surnameText.value);

//oppure se si vuole puntare direttamente a tutti gli input type="text" della classe form-input

const moreNameText = document.querySelectorAll("input[type=text].form-input")[0];
const moreSurnameText = document.querySelectorAll("input[type=text].form-input")[1];

console.log(moreNameText.value+ " " + moreSurnameText.value)