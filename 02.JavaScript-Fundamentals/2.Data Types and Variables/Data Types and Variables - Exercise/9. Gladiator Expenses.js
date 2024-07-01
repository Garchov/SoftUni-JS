function gladiatorExpenses(
  lostFightCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let totalExpenses = 0;

  for (let countGames = 1; countGames <= lostFightCount; ++countGames) {
    if (countGames % 2 === 0) {
      totalExpenses += helmetPrice;
    }
    if (countGames % 3 === 0) {
      totalExpenses += swordPrice;
      if (countGames % 6 === 0) {
        totalExpenses += shieldPrice;
      }
    }
    if (countGames % 12 === 0) {
      totalExpenses += armorPrice;
    }
  }

  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5); // Gladiator expenses: 16.00 aureus
gladiatorExpenses(23, 12.5, 21.5, 40, 200); // Gladiator expenses: 608.00 aureus
