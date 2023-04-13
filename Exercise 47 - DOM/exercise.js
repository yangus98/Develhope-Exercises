const nameText = document.querySelectorAll(".form-input")[0];
const surnameText = document.querySelectorAll(".form-input")[1];
const ageText = document.querySelectorAll(".form-input")[2]
const nameLabel = document.querySelectorAll("label")[0];
const surnameLabel = document.querySelectorAll("label")[1];
const ageLabel = document.querySelectorAll("label")[2];

console.log(`${nameLabel.innerText}${nameText.value}
${surnameLabel.innerText}${surnameText.value}
${ageLabel.innerText}${ageText.value}`
);

//oppure con previousElementSibling

console.log(`${nameText.previousElementSibling.innerText}${nameText.value}
${surnameText.previousElementSibling.innerText}${surnameText.value}
${ageText.previousElementSibling.innerText}${ageText.value}`);

