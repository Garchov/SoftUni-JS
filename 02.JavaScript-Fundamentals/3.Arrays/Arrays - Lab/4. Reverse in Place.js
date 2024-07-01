function revInPlace(input) {
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    arr.push(input[i]);
  }
  arr.reverse();
  console.log(arr.join(" "));
}
revInPlace(['a', 'b', 'c', 'd', 'e'])
revInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
revInPlace(['33', '123', '0', 'dd'])