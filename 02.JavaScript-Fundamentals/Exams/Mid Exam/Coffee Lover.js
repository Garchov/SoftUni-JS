function coffeLover(input) {
  let coffesList = input.shift().split(" ");
  let commandCount = input.shift();
  let temp = [];

  for (let index = 0; index < commandCount; index++) {
    let [command, index1, index2] = input.shift().split(" ");

    switch (command) {
      case "Include":
        coffesList.push(index1);

        break;
      case "Remove":
        if (!coffesList.length < index2) {
          if (index1 === "first") {
            coffesList.splice(coffesList[0], index2);
          } else if (index1 === "last") {
            coffesList.splice(coffesList.length - 1, index2);
          }
        }
        break;
      case "Prefer":
        if (
          coffesList.indexOf(index1) &&
          coffesList.indexOf(index2 ) && coffesList.length>0 && coffesList.length -1 >0
        ) {
          temp = coffesList[index1];
          coffesList[index1] = coffesList[index2];
          coffesList[index2] = temp;
        }
    
        break;
      case "Reverse":
        coffesList.reverse();
        break;
    }
  }
  console.log(`Coffees:
${coffesList.join(" ")}`);
}

coffeLover([
  "Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
  "5",
  "Include OrdinaryCoffee",
  "Remove first 1",
  "Prefer 0 1",
  "Prefer 3 1",
  "Reverse",
]);
coffeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"5",
"Include TurkishCoffee",
"Remove first 2",
"Remove last 1",
"Prefer 3 1",
"Reverse"])

