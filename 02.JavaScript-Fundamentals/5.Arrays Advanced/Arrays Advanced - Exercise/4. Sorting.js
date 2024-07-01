function sorting(input) {
  input = input.sort((a, b) => a - b);
  let sortedArr = [];

  while (input.length > 0) {
    let biggest = input.pop();
    sortedArr.push(biggest);
    let smallest = input.shift();
    sortedArr.push(smallest);
  }
  console.log(sortedArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
