function pyramid(input) {
  let maxNum = Number(input[0]);
  let curNum = 1;
  let curRow = 1;
  let curRowCount = 0;
  let results = "";

  while (curNum <= maxNum) {
    if (curRowCount < curRow) {
      results += `${curNum} `;
      curRowCount++;
    } else {
      results += `\n${curNum} `; /// преместване на нов ред
      curRow++;
      curRowCount = 1;
    }

    curNum++;
  }
  console.log(results);
}
pyramid(["7"]);
