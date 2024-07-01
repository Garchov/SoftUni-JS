function flowers(input) {
  let chrysanthemums = Number(input[0]);
  let roses = Number(input[1]);
  let tulip = Number(input[2]);
  let season = input[3];
  let holiday = input[4];

  let chrysPrice = 0;
  let rosesPrice = 0;
  let tulipPrice = 0;

  switch (season) {
    case "Spring":
    case "Summer":
      chrysPrice = 2.0;
      rosesPrice = 4.1;
      tulipPrice = 2.5;

      break;
    case "Autumn":
    case "Winter":
      chrysPrice = 3.75;
      rosesPrice = 4.5;
      tulipPrice = 4.15;
      break;
  }
  let totalFlowers = chrysanthemums + roses + tulip;
  let totalFlowersPrice =
    chrysanthemums * chrysPrice + roses * rosesPrice + tulip * tulipPrice;

  if (holiday === "Y") {
    totalFlowersPrice *= 1.15;
  }

  if (season === "Spring" && tulip > 7) {
    totalFlowersPrice *= 0.95;
  }
  if (season === "Winter" && roses > 10) {
    totalFlowersPrice *= 0.9;
  }
  if (totalFlowers > 20) {
    totalFlowersPrice *= 0.8;
  }
  let totalCost = totalFlowersPrice + 2.0;

  console.log(totalCost.toFixed(2));
}

flowers(["10", "10", "10", "Autumn", "N"]);
