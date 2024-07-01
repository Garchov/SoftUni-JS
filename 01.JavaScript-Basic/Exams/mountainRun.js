function mountainRun(input) {
  let record = Number(input[0]);
  let distanceMeter = Number(input[1]);
  let timeInSec = Number(input[2]);

  let competitionTime = distanceMeter * timeInSec;
  let hardPart = Math.floor(distanceMeter / 50) * 30;

  let realTime = competitionTime + hardPart;
  competitionTime += hardPart;
  if (realTime > record) {
    let notEnough = realTime - record;
    console.log(`No! He was ${notEnough.toFixed(2)} seconds slower.`);
  } else if (realTime < record) {
    console.log(`Yes! The new record is ${realTime.toFixed(2)} seconds.`);
  }
}
mountainRun(["5554.36", "1340", "3.23"]);
