function objectsDemo(firstName, lastName, age) {
    let res = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    return res;
  }
  console.log(objectsDemo("Peter", "Pan", "20"));
  
  function objectsDemo(firstName, lastName, age) {
    let res = {
      firstName,
      lastName,
      age,
    };
    return res;
  }
  console.log(objectsDemo("Peter", "Pan", "20"));
  
  function objectsDemo(firstName, lastName, age) {
    return {
      firstName,
      lastName,
      age,
    };
  }
  
  let myObj = objectsDemo("Peter", "Pan", "20");
  console.log(myObj);

  function objectsDemo() {
    let person={
      firstName: "Ivan",
      lastName: "George",
      age: 30,
    };
    console.log(person[1]);
  }
  objectsDemo(
  );