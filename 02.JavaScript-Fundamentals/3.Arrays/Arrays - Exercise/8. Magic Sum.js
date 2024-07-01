function magicSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    curNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      num = arr[j];
      let sum = curNum + num;

      if (sum === targetSum) {
        console.log(`${curNum} ${num}`);
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log(".........");
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log(".........");
magicSum([1, 2, 3, 4, 5, 6], 6);
