function cityParser(cityInfo) {
    // [name, area, population, country, postCode]
    let entries = Object.entries(cityInfo);
    for (let [key, value] of entries) {
      console.log(`${key} -> ${value}`);
    }
  
    // for (let key of Object.keys(cityInfo)) {
    //   console.log(`${key} -> ${cityInfo[key]}`);
    // }
  }
  cityParser({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
  });


  function city({ name, area, population, country, postCode }) {
    let cordinates = {
      name: name,
      area: area,
      population: population,
      country: country,
      postCode: postCode,
    };
    for (const key in cordinates) {
      let element = cordinates[key];
      console.log(`${key} -> ${element}`);
    }
  }
  
  city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
  });
