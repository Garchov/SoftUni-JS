function theBestPlayer(input) {
  let index = 0;
  let command = input[index];
  let bestPlayerName = "";
  let bestPlayerGoals = 0;
  let hasHatTrick = false;

  while (command !== "END") {
    let currentPlayerName = command;
    index++;
    let currentPlayerGoals = Number(input[index]);
    index++;

    if (currentPlayerGoals >= bestPlayerGoals) {
      bestPlayerName = currentPlayerName;
      bestPlayerGoals = currentPlayerGoals;
    }

    if (currentPlayerGoals >= 3) {
      hasHatTrick = true;
    }

    if (bestPlayerGoals >= 10) {
      break;
    }

    command = input[index];
  }

  if (hasHatTrick) {
    console.log(`${bestPlayerName} is the best player!`);
    console.log(
      `He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`
    );
  } else {
    console.log(`${bestPlayerName} is the best player!`);
    console.log(`He has scored ${bestPlayerGoals} goals.`);
  }
}

theBestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);

theBestPlayer(["Silva", "5", "Harry Kane", "10", "END"]);
