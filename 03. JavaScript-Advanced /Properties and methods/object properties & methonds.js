//? JavaScript - useful object properties & methods


//? 1. Object.prototype.hasOwnProperty() 
console.log("hello".hasOwnProperty('length'));  // returns true

//? 2. Object.keys()
const car = { make: 'Toyota', model: 'Camry', year: 2020 };
console.log(Object.keys(car)); // returns ["make", "model", "year"]

//? 3. Object.values()
console.log(Object.values(car)); // returns ["Toyota", "Camry", 2020]

//? 4. Object.entries()
console.log(Object.entries(car)); // returns [["make", "Toyota"], ["model", "Camry"], ["year", 2020]]

//? 5. Object.freeze()
const user = { name: 'John', age: 30 };
Object.freeze(user);
user.age = 35; // This will not change the age property
console.log(user.age); // returns 30


//? 6. Object.seal()
const person = { name: 'John', age: 30 };
Object.seal(person);
person.age = 35; // This will not change the age property
console.log(person.age); // returns 30

//? 7. Object.isFrozen()
const user = { name: 'John', age: 30 };
Object.freeze(user);
console.log(Object.isFrozen(user)); // returns true

//? 8. Object.isSealed()
const user = { name: 'John', age: 30 };
Object.seal(user);
console.log(Object.isSealed(user)); // returns true


