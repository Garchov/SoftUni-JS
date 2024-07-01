function grades(input) {
  let gamesCount = Number(input[0]);
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  let counter5 = 0;
  let counter6 = 0;
  let totalBonus = 0;

  for (let i = 1; i <= gamesCount; i++) {
    let gamePoint = Number(input[i]);

    if (gamePoint >= 0 && gamePoint <= 9) {
      counter1++;

      totalBonus += gamePoint * 0.2;
    } else if (gamePoint >= 10 && gamePoint <= 19) {
      counter2++;
      totalBonus += gamePoint * 0.3;
    } else if (gamePoint >= 20 && gamePoint <= 29) {
      counter3++;
      totalBonus += gamePoint * 0.4;
    } else if (gamePoint >= 30 && gamePoint <= 39) {
      counter4++;
      totalBonus += 50;
    } else if (gamePoint >= 40 && gamePoint <= 50) {
      counter5++;
      totalBonus += 100;
    } else {
      counter6++;
      totalBonus /= 2;
    }
  }
  console.log(totalBonus.toFixed(2));
  console.log(`From 0 to 9: ${((counter1 / gamesCount) * 100).toFixed(2)}%`);
  console.log(`From 10 to 19: ${((counter2 / gamesCount) * 100).toFixed(2)}%`);
  console.log(`From 20 to 29: ${((counter3 / gamesCount) * 100).toFixed(2)}%`);
  console.log(`From 30 to 39: ${((counter4 / gamesCount) * 100).toFixed(2)}%`);
  console.log(`From 40 to 50: ${((counter5 / gamesCount) * 100).toFixed(2)}%`);
  console.log(
    `Invalid numbers: ${((counter6 / gamesCount) * 100).toFixed(2)}%`
  );
}

grades(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
