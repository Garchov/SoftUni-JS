let phonebook = {
  "Ivan Ivanov": "123-456-789-12",
  "Georgie Georgiev": "456-789-223-12",
  "Peter Petrov": "321-654-453-23",
};
//Compare same string
let nameOne = "Pesho";

let nameTwo = "Pesho";
console.log(nameOne === nameTwo); // true

//Compare same symbol
let symbolOne = Symbol("Pesho");
let symbolTwo = Symbol("Pesho");

console.log(symbolOne === symbolTwo); // false
console.log(typeof symbolOne);

//Create customer iterator
phonebook[Symbol.iterator] = function () {
  let names = Object.keys(this);
  let index = 0;
  return {
    next() {
      return {
        value: names[index++],
        done: index > names.length,
      };
    },
  };
};

for (const name of phonebook) {
  console.log(name);
}
