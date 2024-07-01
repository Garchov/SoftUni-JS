function oddAndEvenSum(number) {
  let evenResult = evenSum(number);
  let oddResult = oddSum(number);
  console.log(`Odd sum = ${evenResult}, Even sum = ${oddResult}`);
  function evenSum(num) {
    let even = 0;
    let numAsString = String(num);
    for (let num of numAsString) {
      if (num % 2 !== 0) {
        even += Number(num);
      }
    }
    return even;
  }
  function oddSum(num) {
    let odd = 0;
    let numAsString = String(num);
    for (let num of numAsString) {
      if (num % 2 == 0) {
        odd += Number(num);
      }
    }
    return odd;
  }
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
