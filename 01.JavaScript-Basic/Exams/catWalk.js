function catWalk(input) {
  let minWalk = Number(input[0]);
  let countWalk = Number(input[1]);
  let calories = Number(input[2]);

  let oneMinCalories = 5;

  let totalWalkPerDay = minWalk * countWalk;
  let caloriesPerDay = totalWalkPerDay * oneMinCalories;
  let percantage = (caloriesPerDay / calories) * 100;

  if (percantage >= 50) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesPerDay}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesPerDay}.`
    );
  }
}

catWalk(["30", "3", "600"]);
