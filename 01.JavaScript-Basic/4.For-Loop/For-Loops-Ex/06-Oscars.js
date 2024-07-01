function calculatePoints(input) {
  let actorName = input[0];
  let academyPoints = Number(input[1]);
  let judgesCount = Number(input[2]);

  for (let i = 3; i < input.length; i += 2) {
    let judgeName = input[i];
    let judgePoints = Number(input[i + 1]);

    let judgeScore = (judgeName.length * judgePoints) / 2;
    academyPoints += judgeScore;

    if (academyPoints > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(
          1
        )}!`
      );
      return;
    }
  }

  let neededPoints = (1250.5 - academyPoints).toFixed(1);
  console.log(`Sorry, ${actorName} you need ${neededPoints} more!`);
}


calculatePoints([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
calculatePoints([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
