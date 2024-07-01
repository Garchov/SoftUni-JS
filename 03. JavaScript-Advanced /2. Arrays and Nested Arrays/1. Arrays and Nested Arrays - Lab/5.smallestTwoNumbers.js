function smallestTwoNumbers(input) {
  const sorted = input.sort((a, b) => a - b);
  console.log(sorted.slice(0, 2).join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);
