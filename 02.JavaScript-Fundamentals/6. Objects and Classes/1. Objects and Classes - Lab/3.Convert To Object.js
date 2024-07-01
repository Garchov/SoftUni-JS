function convertToObject(JSONData) {
    // console.log(JSONData);
    let person = JSON.parse(JSONData);
  
    // console.log(person);
  
    for (let key of Object.keys(person)) {
      console.log(`${key}: ${person[key]}`);
    }
  }
  convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

  function city(input) {
    let person = JSON.parse(input)
  for (const key in person) {
    let element = person[key];
    console.log(`${key}: ${element}`);
       
    }
  }
  
  city('{"name": "George", "age": 40, "town": "Sofia"}');