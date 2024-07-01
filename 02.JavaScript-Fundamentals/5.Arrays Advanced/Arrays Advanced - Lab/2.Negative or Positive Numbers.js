function negativeOrPositiveNum(input) {
  let result = [];
  for (let num of input) {
    num = Number(num);
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
console.log(result.join('\n'));
}
negativeOrPositiveNum(["7", "-2", "8", "9"]);
negativeOrPositiveNum(["3", "-2", "0", "-1"]);
