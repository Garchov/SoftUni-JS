function test(specialNumber) {
  let isSpecial = false;

  for (let i = 1; i <= specialNumber; i++) {
    if (i == "5" || i == "7" || i == "11") {
      isSpecial = true;

      if (isSpecial) {
        console.log(`${i} -> True `);
      } else {
        console.log(`${i} -> False `);
      }
    }
  }
}
test(15);
test(20);
