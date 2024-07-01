function race(array) {
  let participants = array.shift().split(", ");
  let objectNames = {};

  for (const element of array) {
    if (element !== "end of race") {
      
    
    let distance = 0;
    let names = /[a-zA-Z]/g;
    let numbers = /[0-9]/g;
    let racerNames = element.match(names);
    let distanceInDigits = element.match(numbers);
    for (const iterator of distanceInDigits) {
      distance += iterator;
    }

    if (participants.includes(racerNames)) {
      if (objectNames.hasOwnProperty(racerNames)) {
        objectNames[racerNames] += distanceInDigits;
      } else {
        objectNames[racerNames] = distanceInDigits;
      }
    }
  }

  let sorted = Object.keys(objectNames).sort((a, b) => objectNames[b] - objectNames[a]);

  console.log(
    `1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`
  );
}
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
