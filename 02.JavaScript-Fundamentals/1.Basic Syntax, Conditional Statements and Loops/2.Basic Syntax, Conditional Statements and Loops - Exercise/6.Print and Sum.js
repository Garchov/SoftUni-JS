function printAndSum(start, end) {
  let sum = 0;
  let numAsString = "";
  while (start <= end) {
    numAsString = numAsString + " " + start;

    sum += start;
    start++;
  }
  console.log(numAsString);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
