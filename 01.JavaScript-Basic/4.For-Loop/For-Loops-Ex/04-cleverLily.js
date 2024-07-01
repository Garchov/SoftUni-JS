function forLoops(input) {
  let age = Number(input[0]);
  let washMachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  let totalMoney = 0;
  let getMoney = 10;

  for (letbirthday = 1; birthday <= age; birthday++) {
    if (birthday % 2 === 0) {
      totalMoney += getMoney - 1;
      getMoney += 10;
    } else {
      totalMoney += toyPrice;
    }
  }
  if (totalMoney >= washMachinePrice) {
    let moneyLeft = totalMoney - washMachinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = washMachinePrice - totalMoney;
    if (washMachinePrice > totalMoney) {
      console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
  }
}
forLoops(["10", "170.00", "6"]);
