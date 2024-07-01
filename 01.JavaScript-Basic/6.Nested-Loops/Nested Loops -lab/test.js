function test(start, end, magicNumber) {
  start = Number(start);
  end = Number(end);
  magicNumber = Number(magicNumber);
  let result =0;

  let combination = 0;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      result = i + j;
      
    }
  }
  if (result === magicNumber) {
    combination++;
    console.log(`Combination  N:${combination} (${i} + ${j} = ${result})`);

}

  if (combination === 0) {
    console.log(`${combination} combination  - neither equal to ${magicNumber}`);
  }
}
// Пример за използване
test("1", "10", "5");