function partyTime(array) {
  let normal = [];
  let vip = [];
  let isParty = false;

  for (const line of array) {
    if (line === "PARTY") {
      isParty = true;
      continue;
    }

    let firstChar = line[0];

    if (!isParty) {
      !isNaN(firstChar) ? vip.push(line) : normal.push(line);
    } else {
      if (!isNaN(firstChar)) {
        let index = vip.indexOf(line);
        vip.splice(index, 1);
      } else {
        let index = normal.indexOf(line);
        normal.splice(index, 1);
      }
    }
  }

  let size = normal.length + vip.length;

  console.log(size);
  vip.forEach((el) => console.log(el));
  normal.forEach((el) => console.log(el));
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);


