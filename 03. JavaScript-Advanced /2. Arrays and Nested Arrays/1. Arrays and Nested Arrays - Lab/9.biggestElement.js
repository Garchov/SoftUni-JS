function biggestElement(...arrays) {
    let flattenedArray = arrays.flat(2); 
    console.log(flattenedArray.reduce((a, b) => Math.max(a, b)));
  }
  biggestElement([
    [3, 5, 17, 12, 91, 5],
    [-1, 7, 4, 33, 6, 22],
    [1, 8, 99, 3, 10, 43],
  ]);