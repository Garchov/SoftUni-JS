function smallestTwoNumbers(inputArray) {
  let sortedArray = inputArray.slice().sort((a, b) => a - b);

  let smallestNumbers = sortedArray.slice(0, 2);

  console.log(smallestNumbers.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
