class Person {
    static count=0;
  firstName;
  lastName;
  age;
  email;
  constructor(firstName, lastName, age, email) {
    Person.count++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  //clone constructor
  static clone(person) {
    const result = new Person(person.firstName, person.lastName, person.age, person.email);
    return result;
  }
  toString() {
    return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nAge: ${this.age}\nEmail: ${this.email}`;
  }
}
const myPerson = [new Person("John", "Doe", 25, "johndoe@me.com"),
new Person("Jane", "Doe", 30, "janedoe@me.com"),
new Person("John", "Smith", 35, "johnsmith@me.com"),
]
console.log(myPerson[2].toString());
Object.keys(myPerson).forEach((value) => console.log(value));

//Clone 
const myClone=Person.clone(myPerson[2]);
console.log(myClone);
console.log(myClone === myPerson[2]);
