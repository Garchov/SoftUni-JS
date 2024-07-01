function cinemaVoucher(input) {
  let voucherAmount = Number(input.shift());
  let ticketsCount = 0;
  let otherPurchasesCount = 0;

  for (let i = 0; i < input.length; i++) {
    let purchase = input[i];

    if (purchase === "End") {
      break;
    }

    let purchasePrice = 0;

    if (purchase.length > 8) {
      // Филм
      let firstTwoCharsAsciiSum =
        purchase.charCodeAt(0) + purchase.charCodeAt(1);
      purchasePrice = firstTwoCharsAsciiSum;
    } else {
      // Продукт
      purchasePrice = purchase.charCodeAt(0);
    }

    if (purchasePrice <= voucherAmount) {
      if (purchase.length > 8) {
        ticketsCount++;
      } else {
        otherPurchasesCount++;
      }

      voucherAmount -= purchasePrice;
    } else {
      break; // Излизаме от цикъла, ако парите ваучер не стигат за текущата покупка
    }
  }

  console.log(ticketsCount);
  console.log(otherPurchasesCount);
}

cinemaVoucher([
  "1500",
  "Avengers: Endgame",
  "Bohemian Rhapsody",
  "Deadpool 2",
  "End",
]);
