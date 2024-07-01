let student={
    name: 'Navcho',
    age: 20,
    grades: [2,4,6,5,2],
    location: {
        lat: 42.4,
        long: 20.3
    }
}
//Convert object to  single line JSON
let studentJson=JSON.stringify(student);
console.log(studentJson) //{"name":"Navcho","age":20,"grades":[2,4,6,5,2],"location":{"lat":42.4,"long":20.3}}


//Convert object to multiline JSON
let multilineStudentJson =JSON.stringify(student,null,2);
console.log(multilineStudentJson); /* {
    "name": "Navcho",
    "age": 20,
    "grades": [
      2,
      4,
      6,
      5,
      2
    ],
    "location": {
      "lat": 42.4,
      "long": 20.3
    }
  } */

  //Convert JSON to object
  let newStudent=JSON.parse(multilineStudentJson);
  console.log(newStudent) 