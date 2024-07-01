function addressbook(array) {
  let personInfo = {};
  array.forEach((info) => {
    let [name, phone] = info.split(":");
    personInfo[name] = phone;
  });
  let arrayOfPersonInfo = Object.entries(personInfo);

  let sorted = arrayOfPersonInfo.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (const key of sorted) {
    console.log(`${key[0]} -> ${key[1]}`);
  }
}
addressbook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
