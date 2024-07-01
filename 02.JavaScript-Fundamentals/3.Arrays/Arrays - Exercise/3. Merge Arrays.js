function mergeArrays(arr1, arr2) {
  /* let thirdArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      thirdArr.push(Number(arr1[i]) + Number(arr2[i]));
    } else {
      thirdArr.push(arr1[i] + arr2[i]);
    }
  }
  console.log(thirdArr.join(" - "));
  */

  return arr1
    .map((el, i) => (i % 2 === 0 ? Number(el) + Number(arr2[i]) : el + arr2[i]))
    .join(" - ");
}

console.log(
  mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]),
);
console.log(
  mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]),
);
