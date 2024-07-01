function processOddPosition(array) {
  return array
    .filter((n, i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
}

let result = processOddPosition([10, 15, 20, 25]);
console.log(result);
