function train(input) {
  let wagons = input[0].split(" ").map(Number);
  let capacity = Number(input[1]);

  for (let i = 2; i < input.length; i++) {
    let command = input[i];

    let tokens = command.split(" ");

    if (tokens.includes("Add")) {
      let passengers = Number(tokens[1]);
      wagons.push(passengers);
    } else {
      let passengers = Number(tokens[0]);

      for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] + passengers <= capacity) {
          wagons[j] += passengers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
