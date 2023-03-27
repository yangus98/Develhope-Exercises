const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

const person2 = { ...person1 };
var jsonDeveloper = JSON.stringify(person1);
var stringToCodeDeveloper = JSON.parse(jsonDeveloper);
person2.address.city = 'Milan';

console.log(stringToCodeDeveloper);
console.log(person2);