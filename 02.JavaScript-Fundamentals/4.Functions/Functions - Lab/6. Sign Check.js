function signCheck(first, second, third) {
  function firstAndSecondMultiply(first, second) {
    return first * second;
  }
  let firstSecondResult = firstAndSecondMultiply(first, second);
  let finalResult = firstSecondResult * third;

  if (finalResult < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}
signCheck(5, 12, -15);
signCheck( -6,-12,14);
