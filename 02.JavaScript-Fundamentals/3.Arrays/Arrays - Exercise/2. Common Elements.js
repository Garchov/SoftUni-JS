function printCommonElements(arr1, arr2) {
  let firstArray = arr1;
  let secondArray = arr2;
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] === secondArray[j]) {
        console.log(firstArray[i]);
      }
    }
  }
}
printCommonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"],
);
printCommonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"],
);
