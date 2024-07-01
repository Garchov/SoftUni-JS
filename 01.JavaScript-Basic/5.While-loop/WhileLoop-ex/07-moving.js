function moving(input) {
  function walking(input) {
    let steps = 10_000;
    let allSteps = 0;

    for (let i = 0; i < input.length; i++) {
      if (!isNaN(input[i])) {
        //check is number
        allSteps += Number(input[i]);
      }
    }
    allSteps -= steps;

    if (allSteps > 0) {
      console.log(`Goal reached! Good job!\n${allSteps} steps over the goal!`);
    } else {
      console.log(`${Math.abs(allSteps)} more steps to reach goal.`);
    }
  }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
