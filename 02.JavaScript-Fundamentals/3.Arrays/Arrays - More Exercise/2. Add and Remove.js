function processCommands(commands) {
  let result = [];
  let number = 1;

  for (let command of commands) {
    if (command === "add") {
      result.push(number);
    } else if (command === "remove") {
      if (result.length > 0) {
        result.pop();
      }
    }

    number++;
  }

  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}
processCommands(["add", "add", "add", "add"]);
console.log("....");
processCommands(["add", "add", "remove", "add", "add"]);
console.log("....");
processCommands(["remove", "remove", "remove"]);
