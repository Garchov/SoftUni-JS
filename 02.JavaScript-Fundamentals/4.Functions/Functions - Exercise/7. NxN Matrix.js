function nxnMatrix(input) {
  let result = createMatrix(input);
  
  console.log(result.map(rowArray =>rowArray.join(' ')).join('\n'));

  function createMatrix(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(size);
      }
      matrix.push(row);
    }
    return matrix;
  }
}
nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);
