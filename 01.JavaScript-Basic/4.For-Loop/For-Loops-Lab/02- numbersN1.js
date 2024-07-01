function numbersNTo1(input) {
  let n = Number(input[0]);
  let b = Number(input[1]);
  for (let i = n; i >= b; i--) {
    console.log(i);
  }
}
numbersNTo1(["32", "25"]);
