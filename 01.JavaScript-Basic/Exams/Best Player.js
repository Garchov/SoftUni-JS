function bestPlayer(input) {
    let i = 0;
    let command = input[i];
    i++;
  
    let bestPlayerName = '';
    let bestPlayerGoals = Number.MIN_SAFE_INTEGER;
  
    while (command !== 'END') {
      let currentPlayerName = command;
      let currentPlayerGoals = Number(input[i]);
      i++;
  
      if (currentPlayerGoals > bestPlayerGoals) {
        bestPlayerName = currentPlayerName;
        bestPlayerGoals = currentPlayerGoals;
      }
  
      if (currentPlayerGoals >= 10) {
        break;
      }
  
      command = input[i];
      i++;
    }
  
    console.log(`${bestPlayerName} is the best player!`);
    if (bestPlayerGoals >= 3) {
      console.log(`He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`);
    } else {
      console.log(`He has scored ${bestPlayerGoals} goals.`);
    }
  }
bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);
