const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName= "Simon";

console.log(person1);
console.log(person2);

//Write a comment explaining why, by modifying the object 'person2',
//also the object `person1` would be modified.

//Objects are closely related because we made them equal to each other,
//so any changes we make to one, will be inherited by the other.
