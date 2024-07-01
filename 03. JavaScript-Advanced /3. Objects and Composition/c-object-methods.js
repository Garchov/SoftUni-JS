//Add method to object with function expression
const cat = {
  name: "Navcho",
  age: 9,
  sleep: function () {
    console.log("Zzzzzzzz...");
  },
};

//Invoke object method
cat.sleep();

//Add method to object with arrow function
const bird = {
  type: "Pidgeon",
  fly: () => console.log("I'm flying"),
};
bird.fly();

//Add method using method notation
const car = {
  model: "TELSA 3",
  drive() {
    console.log("Fiuuuu");
  },
  year: 2023,
};
console.log(car); //{model: 'TELSA 3', drive: ƒ, year: 2023}
car.drive();

car.park = function () {
  console.log();
  ("Car is parked");
};

console.log(car); //{model: 'TELSA 3', drive: ƒ, year: 2023, park: ƒ}

//Sorting Helper

const copareNumbers = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort(copareNumbers.descending);
console.log(numbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//Using replace switch with object

// let count = 5;

// switch (command) {
//   case "increment":
//     count++;
//     break;
//   case "decrement":
//     count--;
//     break;

//   case "reset":
//     count = 0;
//     break;
// }

// let commands = {
//   increment() {
//     count++;
//   },
//   decrement() {
//     count--;
//   },
//   reset() {
//     count = 0;
//   },
// }

//   commands['increment']();
//   commands['decrement']();

  //Method context

  let person = {
    name: 'Navcho',
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  person.introduce();


  let introduce = person.introduce;
  console.log(introduce === person.introduce);

  //Execute without context
  introduce();


  let anotherPerson={
    name:'Stamat'
  };
  anotherPerson.greet=introduce;
  anotherPerson.greet();

