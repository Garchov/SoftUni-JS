function race(data) {
  const names = data.shift().split(", ");
  const racers = {};

  for (const line of data) {
    if (line !== "end of race") {
      let racerName = line.match(/[A-Z]+/gi).join("");

      let distanceInDigits = line.match(/\d/g);

        let distance = 0;
        for (const meter of distanceInDigits) {
          distance += +meter;
        }
        if (names.includes(racerName)) {
          if (racers.hasOwnProperty(racerName)) {
            racers[racerName] += distance;
          } else {
            racers[racerName] = distance;
          }
        }
      }
    }
    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
  
    console.log(
      `1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`
    );
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
