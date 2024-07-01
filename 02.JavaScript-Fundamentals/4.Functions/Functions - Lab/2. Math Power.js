function mathPower(n, x) {
  let result = 1;
  for (let i = 0; i < x; i++) {
    result *= n;
  }
  console.log(result);
}
mathPower(2, 8);
mathPower(3, 4);
