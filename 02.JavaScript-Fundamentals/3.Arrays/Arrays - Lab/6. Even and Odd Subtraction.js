function evenOddSum(arr) {
  let sumOdd = 0;
  let sumEven = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  console.log(sumEven - sumOdd);
}
evenOddSum([1, 2, 3, 4, 5, 6]);
evenOddSum([3, 5, 7, 9]);
evenOddSum([2, 4, 6, 8, 10]);
