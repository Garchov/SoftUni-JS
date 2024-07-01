function test(n) {
  for (let num = 1; num <= n; num++) {
    let result = 0;
    let numberAsString = String(num);

    for (let i = 0; i < numberAsString.length; i++) {
      result += Number(numberAsString[i]);
    }

    let special = false;

    if (result == 5 || result == 7 || result == 11) {
      special = true;
    }

    if (special) {
      console.log(`${num} -> True`);
    } else {
      console.log(`${num} -> False`);
    }
  }
}
