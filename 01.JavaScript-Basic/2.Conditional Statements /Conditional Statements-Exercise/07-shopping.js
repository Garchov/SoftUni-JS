function shopping(input) {
  let budget = Number(input[0]);
  let videocardQty = Number(input[1]);
  let processorQty = Number(input[2]);
  let ramQty = Number(input[3]);

  let videocardUnitPrice = 250;
  let videocardTotalAmount = videocardUnitPrice * videocardQty;
  let processorPrice = 0.35 * videocardTotalAmount;
  let processorTotalAmount = processorQty * processorPrice;
  let ramPrice = 0.1 * videocardTotalAmount;
  let ramTotalAmount = ramQty * ramPrice;

  let totalExpense =
    ramTotalAmount + processorTotalAmount + videocardTotalAmount;

  if (videocardQty > processorQty) {
    totalExpense *= 0.85;
  }
  let finalPrice = totalExpense;

  let leftMoney = budget - finalPrice;
  let neededMoney = Math.abs(leftMoney);

  if (finalPrice <= budget) {
    console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${neededMoney.toFixed(2)} leva more!`
    );
  }
}

shopping(["900", "2", "1", "3"]);
