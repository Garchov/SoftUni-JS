function pyramid(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;

  let steps = 1;

  while (base >= 1) {
    if (base > 2) {
      if (steps % 5 === 0) {
        lapisLazuli += (base * 4 - 4) * increment;
      } else {
        marble += (base * 4 - 4) * increment;
      }
      steps++;
      stone += Math.pow(base - 2, 2) * increment;
    } else {
      gold += Math.pow(base, 2) * increment;
    }

    base -= 2;
  }

  console.log(
    `Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(
      marble
    )}\nLapis Lazuli required: ${Math.ceil(
      lapisLazuli
    )}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${Math.floor(
      steps * increment
    )}`
  );
}

// Examples
pyramid(11, 1);
console.log();
pyramid(11, 0.75);
console.log();
pyramid(12, 1);
console.log();
pyramid(23, 0.5);
