function bonusScore(input) {
  let initialPoint = Number(input[0]);
  let bonus = 0;

  if (initialPoint <= 100) {
    bonus += 5;
  } else if (initialPoint > 1000) {
    bonus = initialPoint * 0.1;
  } else {
    bonus = initialPoint * 0.2;
  }

  if (initialPoint % 2 === 0) {
    bonus += 1;
  } else if (initialPoint % 10 === 5) {
    bonus += 2;
  }

  let totalPoints = initialPoint + bonus;
  console.log(bonus);
  console.log(totalPoints);
}

bonusScore(["178"]);
