function forLoops(input) {
  let countTournaments = Number(input[0]);
  let initalPoints = Number(input[1]);
  let point = 0;
  let tornamentsWon = 0;

  for (let i = 2; i < countTournaments + 2; i++) {
    let result = input[i];
    if (result === "W") {
      point += 2000;
      tornamentsWon++;
    } else if (result === "F") {
      point += 1200;
    } else if (result === "SF") {
      point += 720;
    }
  }
  console.log(`Final points: ${initalPoints + point}`);
  console.log(`Average points: ${Math.floor(point / countTournaments)}`);
  let wontPercent = (tornamentsWon / countTournaments) * 100;
  console.log(`${wontPercent.toFixed(2)}%`);
}

forLoops(["5", "1400", "F", "SF", "W", "W", "SF"]);
