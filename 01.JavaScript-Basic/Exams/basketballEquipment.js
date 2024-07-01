function basketballEuqipment(input) {
  let annualTax = Number(input[0]);
  let shoes = annualTax * 0.6; // 153
  let equip = shoes * 0.8;
  let ball = (equip * 1) / 4;
  let accesories = (ball * 1) / 5;

  let totalPrice = (annualTax + shoes + equip + ball + accesories).toFixed(2);
  console.log(totalPrice);
}
basketballEuqipment([320]);


