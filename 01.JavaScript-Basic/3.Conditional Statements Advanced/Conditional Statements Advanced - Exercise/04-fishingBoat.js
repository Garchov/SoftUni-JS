function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishmanCount = Number(input[2]);
  let rent = 0;

  switch (season) {
    case "Spring":
      rent = 3000;
      break;
    case "Summer":
    case "Autumn":
      rent = 4200;
      break;
    case "Winter":
      rent = 2600;
      break;
  }
  if (fishmanCount <= 6) {
    rent *= 0.9;
  } else if (fishmanCount <= 11) {
    rent *= 0.85;
  } else {
    rent *= 0.75;
  }
  if (fishmanCount % 2 === 0 && season !== "Autumn") {
    rent *= 0.95;
  }

  if (budget >= rent) {
    console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(rent - budget).toFixed(2)} leva.`
    );
  }
}
fishingBoat(["3000", "Summer", "11"]);
