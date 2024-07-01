function employees(input) {
  let object = {};
  for (const city of input) {
    let [town, ...rest] = city.split(" | ");
    object.town = town;
    object.latitude = Number(rest[0]).toFixed(2);
    object.longitude = Number(rest[1]).toFixed(2);

    console.log(object);
  }
}
employees(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);


/* 
  function employees(input) {
    for (const city of input) {
      let [town, ...rest] = city.split(" | ");
      let latitude = Number(rest[0]).toFixed(2);
      let longitude = Number(rest[1]).toFixed(2);
  
      let object = `{ town: '${town}', latitude: '${latitude}', longitude: '${longitude}' }`;
      console.log(object);
    }
  }
  
  employees(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]); */