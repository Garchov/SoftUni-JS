function sumNumbers(input) {
  let initialNumber = Number(input[0]);
  let sum = 0;
  let index = 1;
  let currentNumber = Number(input[index]);

  while (sum < initialNumber) {
    sum += currentNumber;
    index++;
    currentNumber = Number(input[index]);
  }
  console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]);
