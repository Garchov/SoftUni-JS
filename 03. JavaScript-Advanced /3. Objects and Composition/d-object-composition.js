//Nested object

let student = {
  firstname: "Navcho",

  lastname: "Georgiev",
  age: 20,
  location: { lat: 42.4, long: 20.3 },
};
console.log(student);
console.log(student.location.lat);

//Composing Object with behaivior

function print() {
  console.log(`${this.name} is printing a page`);
}
function scan() {
  console.log(`${this.name} is scanning a document`);
}
const printer = {
  name: "Brother",
  print,
};
printer.print();

const scanner = {
  name: "HP Scanner",
  scan,
};
scanner.scan();

const copier = {
  name: "Copier Machine",
  scan,
  print,
};
copier.print();
copier.scan();

//Factory function

function createCat(name, bread) {
  let cat = {
    name,
    bread,
  };

  cat.sleep = () => console.log("Zzzzzzzz...");
  

  return cat;
}

const cat = createCat("Navcho", 9);
const simpleCat = createCat("Simple", 2);

cat.sleep();
simpleCat.sleep();
console.log(cat);
console.log(simpleCat);
