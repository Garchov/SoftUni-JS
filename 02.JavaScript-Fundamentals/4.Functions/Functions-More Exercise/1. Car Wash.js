function carWash(commands) {
  let cleanlinessPercentage = calculateCleanliness(commands);

  console.log(`The car is ${cleanlinessPercentage.toFixed(2)}% clean.`);

  function calculateCleanliness(commands) {
    let cleanliness = 0;

    for (let command of commands) {
      switch (command) {
        case "soap":
          cleanliness += 10;
          break;
        case "water":
          cleanliness *= 1.2;
          break;
        case "vacuum cleaner":
          cleanliness *= 1.25;
          break;
        case "mud":
          cleanliness *= 0.9;
          break;
      }
    }

    return cleanliness;
  }
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
