function test(input) {
  let movieBudget = Number(input[0]);
  let statistCount = Number(input[1]);
  let clothesPrice = Number(input[2]);

  let decor = movieBudget * 0.1;

  if (statistCount > 150) {
    clothesPrice *= 0.9;
  }

  let totalexpenses = statistCount * clothesPrice + decor;

  if (totalexpenses < movieBudget) {
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${(movieBudget - totalexpenses).toFixed(
        2
      )} leva left.`
    );
  } else if (totalexpenses > movieBudget) {
    console.log(`Not enough money!`);
    console.log(
      `Wingard needs ${Math.abs(totalexpenses - movieBudget).toFixed(
        2
      )} leva more.`
    );
  }
}

test(["15437.62", "186", "57.99"]);
