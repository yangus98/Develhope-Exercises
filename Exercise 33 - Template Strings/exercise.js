class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");
console.log(`His name is ${developer.firstName} and his surname is ${developer.lastName}`);

let code = `class Person {
  constructor(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  }
  }
  
  const developer = new Person("Mario", "Rossi");
  console.log(developer.firstName + " " + developer.lastName);
  `
console.log(code);
