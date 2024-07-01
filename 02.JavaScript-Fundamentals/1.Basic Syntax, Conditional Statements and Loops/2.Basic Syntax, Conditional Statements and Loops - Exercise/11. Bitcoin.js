function bitcoinMining(minedGold) {
  let purchasedBitcoins = 0;
  let daysWorked = 0;
  let remainingMoney = 0;
  let firstPurchaseDay = 0;

  for (let i = 0; i < minedGold.length; i++) {
    daysWorked++;
    let goldMined = minedGold[i];

    if (daysWorked % 3 === 0) {
      remainingMoney += (goldMined - goldMined * 0.3) * 67.51;
    } else {
      remainingMoney += goldMined * 67.51;
    }

    while (remainingMoney >= 11949.16) {
      if (firstPurchaseDay === 0) {
        firstPurchaseDay = daysWorked;
      }
      remainingMoney -= 11949.16;
      purchasedBitcoins++;
    }
  }

  console.log(`Bought bitcoins: ${purchasedBitcoins}`);

  if (purchasedBitcoins >= 1) {
    console.log(`Day of the first purchased bitcoin: ${firstPurchaseDay}`);
  }

  console.log(`Left money: ${remainingMoney.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
console.log(); // Разделителна линия
bitcoinMining([50, 100]);
console.log(); // Разделителна линия
bitcoinMining([3124.15, 504.212, 2511.124]);
