function footballresults(input) {
  let wins = 0;
  let losses = 0;
  let draws = 0;

  for (let i = 0; i < input.length; i++) {
    let match = input[i].split(":");
    let teamGoals = Number(match[0]);
    let opponentGoals = Number(match[1]);

    if (teamGoals > opponentGoals) {
      wins++;
    } else if (teamGoals < opponentGoals) {
      losses++;
    } else {
      draws++;
    }
  }

  console.log(`Team won ${wins} games.`);
  console.log(`Team lost ${losses} games.`);
  console.log(`Drawn games: ${draws}`);
}

footballresults(["3:1", "0:2", "0:0"]);
