const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const{id,...rest} = person

console.log(id, rest);