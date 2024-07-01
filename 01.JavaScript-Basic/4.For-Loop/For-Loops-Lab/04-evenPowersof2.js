function solve(input) {
  let age = Number(input[0]);
  let washPrice = Number(input[1]);
  let priceToy = Number(input[2]);
  let totalMoney = 0;
  let getMoney = 10;

  for (birthday = 1; birthday < age; birthday++) {
    birthday = Number(input[age]);
    if (birthday % 2 === 0) {
      getMoney++ - 1;
      getMoney++;
    } else {
      priceToy++;
    }
    console.log(birthday);
  }
}

solve(["10", "170.00", "6"]);
