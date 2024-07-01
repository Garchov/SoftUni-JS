function addAndSubtract(arr) {
    let subArr = arr;
    let sumArray = 0;
    let modifiedArraySum = 0;
    for (let i = 0; i < subArr.length; i++) {
      sumArray += subArr[i];
      if (subArr[i] % 2 === 0) {
        subArr[i] += i;
      } else {
        subArr[i] -= i;
      }
      modifiedArraySum += subArr[i];
    }
    console.log(arr);
    console.log(sumArray);
    console.log(modifiedArraySum);
  }
  addAndSubtract([5, 15, 23, 56, 35]);
  addAndSubtract([-5, 11, 3, 0, 2]);
 