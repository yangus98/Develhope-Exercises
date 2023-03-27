class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstval) {
    this._firstName = firstval;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastval) {
    this._lastName = lastval;
  }

  get age() {
    return this._age;
  }
  set age(ageval) {
    this._age = ageval;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person._firstName = "Maria";
person._lastName = "Verdi";
console.log(person.fullName);
