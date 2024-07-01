function maxNumber(arr) {
  let topIntegers = [];
  let maxSoFar = Number.MIN_SAFE_INTEGER;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxSoFar) {
      topIntegers.unshift(arr[i]);
      maxSoFar = arr[i];
    }
  }

  console.log(topIntegers.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 34, 20]);
maxNumber([48]);
