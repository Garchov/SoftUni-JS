function toyShop(input) {
  let tripPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollCount = Number(input[2]);
  let bearCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let truckCount = Number(input[5]);

  let toySale =
    puzzleCount * 2.6 +
    dollCount * 3 +
    bearCount * 4.1 +
    minionsCount * 8.2 +
    truckCount * 2.0;
  let toyCount =
    puzzleCount + dollCount + bearCount + minionsCount + truckCount;

  if (toyCount >= 50) {
    toySale *= 0.75;
  }

  toySale *= 0.9;

  if (toySale >= tripPrice) {
    let freeMoney = toySale - tripPrice;
    console.log(`Yes! ${freeMoney.toFixed(2)} lv left.`);
  } else {
    let neededMoney = tripPrice - toySale;
    console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
  }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
