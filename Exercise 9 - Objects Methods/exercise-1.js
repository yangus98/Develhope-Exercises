const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

for (const [key, value] of Object.entries(person)) {
  console.log(key,":", value);
  }

  
for (let values of Object.values(person)) {
    console.log(values);
}

for (let keys of Object.keys(person)) {
  console.log(keys);
}



