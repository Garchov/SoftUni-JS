function bigger(...params) {
  let biggestNumber = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < params.length; i++) {
    if (params[i] > biggestNumber) {
      biggestNumber = params[i];
    }
  }
  return biggestNumber;
}
console.log(bigger(-2, 7, 3));
console.log(bigger(130, 5, 99));
console.log(bigger(43, 43.2, 43.1));
console.log(bigger(2, 2, 2));
