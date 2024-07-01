function equalSumOddEven(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let result = " ";

  for (let curNum = startNum; curNum <= endNum; curNum++) {
    let evenPostitionSum = 0;
    let oddPostitionSum = 0;

    let curNumStr = curNum.toString();
    for (let i = 0; i < curNumStr.length; i++) {
      let digit = Number(curNumStr[i]);

      if (i % 2 === 0) {
        evenPostitionSum += digit;
      } else {
        oddPostitionSum += digit;
      }
    }

    if (evenPostitionSum === oddPostitionSum) {
      result += curNum + " ";
    }
  }
  console.log(result);
}
equalSumOddEven(["100000", "100050"]);
