function forLoops(input) {
  let groupCount = Number(input[0]);
  let totalPeople = 0;
  let musalaCount = 0;
  let montBlancCount = 0;
  let kilimanjaroCount = 0;
  let k2Count = 0;
  let everestCount = 0;

  for (let i = 1; i <= groupCount; i++) {
    let peopleCount = Number(input[i]);
    totalPeople += peopleCount;

    if (peopleCount <= 5) {
      musalaCount += peopleCount;
    } else if (peopleCount <= 12) {
      montBlancCount += peopleCount;
    } else if (peopleCount <= 25) {
      kilimanjaroCount += peopleCount;
    } else if (peopleCount <= 40) {
      k2Count += peopleCount;
    } else {
      everestCount += peopleCount;
    }
  }

  let musalaPercent = ((musalaCount / totalPeople) * 100).toFixed(2);
  let montBlancPercent = ((montBlancCount / totalPeople) * 100).toFixed(2);
  let kilimanjaroPercent = ((kilimanjaroCount / totalPeople) * 100).toFixed(2);
  let k2Percent = ((k2Count / totalPeople) * 100).toFixed(2);
  let everestPercent = ((everestCount / totalPeople) * 100).toFixed(2);

  console.log(`${musalaPercent}%`);
  console.log(`${montBlancPercent}%`);
  console.log(`${kilimanjaroPercent}%`);
  console.log(`${k2Percent}%`);
  console.log(`${everestPercent}%`);
}
forLoops(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
