function bikeRace(input) {
  let juniorBikers = Number(input[0]);
  let seniorBikers = Number(input[1]);
  let trailType = input[2];

  let juniorTax = 0;
  let seniorTax = 0;

  switch (trailType) {
    case "trail":
      juniorTax = 5.5;
      seniorTax = 7;
      break;
    case "cross-country":
      juniorTax = 8;
      seniorTax = 9.5;
      break;
    case "downhill":
      juniorTax = 12.25;
      seniorTax = 13.75;
      break;
    case "road":
      juniorTax = 20;
      seniorTax = 21.5;
      break;
  }

  let totalJuniorTax = juniorBikers * juniorTax;
  let totalSeniorTax = seniorBikers * seniorTax;

  let totalIncome = totalJuniorTax + totalSeniorTax;
  let discount = 0;

  if (juniorBikers + seniorBikers >= 50 && trailType === "cross-country") {
    discount = 0.25;
  }

  totalIncome *= 1 - discount;

  let expenses = totalIncome * 0.05;
  totalIncome -= expenses;

  console.log(` ${totalIncome.toFixed(2)}`);
}

bikeRace(["10", "20", "trail"]);
