// Basic syntax

const cat = {
  name: "Navcho",
  age: 9,
  isMale: true,
};

//Set new property
cat.eyeColor = "Amber";

//shortHand syntax
let firstName = "Navcho";
let obj = {
  firstName,
  age: 10,
};

//Access property with dot notation
console.log(obj.firstName);

//Access property with bracket notation
console.log(obj["firstName"]);

//Access value with bracket notation using variable
let dynamicProperty = "age";
console.log(obj[dynamicProperty]);

//Set property name that doesn't comply to identifier rules
let employee = {
  "first-name": "Pesho",
};
console.log(employee["first-name"]);

//Object destructuring assignment
let { name } = cat;


//Rest operator
let { ...rest } = cat;
console.log(cat);


//Delete property
delete cat["isMale"];
console.log(cat);

//Reference value
// let anotherObj = simpleObj;

//Use dynamic property name in Object literal
let propName = "isEco";
let house={
    color: 'Pink',
    isMultiFamily: true,
    [propName]: true
}
console.log(house); // console.log(house); // x{color: 'Pink', isMultiFamily: true, isEco: true}

