function sumNumbers(input) {
  let sumOfDigits = 0;
  let stringAmount = input[0];

  for (let index = 0; index < stringAmount.length; index++) {
    let currentNumber = Number(stringAmount[index]);
    sumOfDigits += currentNumber;
  }
  console.log(`The sum of the digits is:${sumOfDigits}`);
}
sumNumbers([`1234`]);
