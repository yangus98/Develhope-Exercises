class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // il metodo è collegato, all'istanza newPerson e, attraverso this, ai campi di Person

  toJson() {
    return JSON.stringify(this);
  }

  // il metodo, poichè static, è legato alla classe e non ad un'istanza. Si può richiamare solo con Person quindi.
  // Static sui metodi non userà i campi di Person, ma altri valori a sè stanti.

  static fromJson(value) {
    return JSON.parse(value);
  }

}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

const newPerson = new Person(2, "Giovanni", "Gargiulo", 30);

console.log(newPerson);
console.log(newPerson.toJson())


