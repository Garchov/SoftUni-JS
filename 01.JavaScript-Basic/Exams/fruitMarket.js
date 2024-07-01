function fruitMarket(input) {
  let strawberriePrice = Number(input[0]);
  let bananaCount = Number(input[1]);
  let OrangeCount = Number(input[2]);
  let raspberryCount = Number(input[3]);
  let strawberrieCount = Number(input[4]);

  let raspberryPrice = strawberriePrice / 2; //24;
  let OrangePrice = raspberryPrice - 0.4 * raspberryPrice; // 14.39
  let bananaPrice = raspberryPrice - 0.8 * raspberryPrice; // 4.79

  let needMoney =
    strawberriePrice * strawberrieCount +
    bananaPrice * bananaCount +
    OrangePrice * OrangeCount +
    raspberryPrice * raspberryCount;
  console.log(needMoney.toFixed(2));
}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);
