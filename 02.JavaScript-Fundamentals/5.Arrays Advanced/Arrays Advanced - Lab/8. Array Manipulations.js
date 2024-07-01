function arrayManipulations(input) {
  let numbers = input
    .shift() // изрязваме първия елемент
    .split(" ") // превръщаме го в масив от стрингове
    .map(Number); // превръщаме го в масив от числа

  for (let row of input) {
    let [command, firstNum, secondNum] = row.split(" ");

    /*  let currentRow = row.split(' ');
    let command = currentRow[0];
    let firstNum= currentRow[1];
    let secondNum = currentRow[2]; */

    switch (command) {
      case "Add":
        numbers.push(Number(firstNum));
        break;
      case "Remove":
        numbers = numbers.filter((num) => num !== Number(firstNum));
        break;

      case "RemoveAt":
        numbers.splice(Number(firstNum), 1);
        break;
      case "Insert":
        numbers.splice(Number(secondNum), 0, Number(firstNum));
        break;
    }
  }
  console.log(numbers.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
/* arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
);
 */
