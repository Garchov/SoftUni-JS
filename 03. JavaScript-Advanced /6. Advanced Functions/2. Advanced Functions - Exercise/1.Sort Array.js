function sortArray(array, type) {
  const sort = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };
  return array.sort(sort[type]);
}

console.log(sortArray([14, 7, 17, 6, 8], "asc"));
console.log(sortArray([14, 7, 17, 6, 8], "desc"));
]

sortArray
sortArraa