function getPersons() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }

    toString() {
      return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nAge: ${this.age}\nEmail: ${this.email}`;
    }
  }

  // Function to create and return an array of Person objects

  const persons = [
    new Person("Anna", "Simpson", 22, "anna@yahoo.com"),
    new Person("SoftUni"),
    new Person("Stephan", "Johnson", 25),
    new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"),
  ];

  return persons;
}

console.log(getPersons());
