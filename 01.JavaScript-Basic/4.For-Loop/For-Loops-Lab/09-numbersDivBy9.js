function numbersDivBy9(input) {
  let sum = 0;
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  for (let currentNumber = num1; currentNumber <= num2; currentNumber++) {
    if (currentNumber % 9 === 0) {
      sum += currentNumber;
    }
  }
  console.log(`The sum: ${sum}`);

  for (let currentNumber = num1; currentNumber <= num2; currentNumber++) {
    if (currentNumber % 9 === 0) {
      sum += currentNumber;
      console.log(currentNumber);
    }
  }
}
numbersDivBy9(["100", "200"]);
