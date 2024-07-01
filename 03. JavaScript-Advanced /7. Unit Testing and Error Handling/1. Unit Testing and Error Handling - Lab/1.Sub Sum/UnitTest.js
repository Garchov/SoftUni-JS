function subSumWithErrorHandling(arr, startIndex, endIndex) {
  if (!Array.isArray(arr)) /*|| Number.isInteger(startIndex) || Number.isInteger(endIndex))*/ {
   return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex >= arr.length) {
    endIndex = arr.length - 1;
  }
  let sum = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    sum += Number(arr[i]);
  }

  return sum;
}

console.log(subSumWithErrorHandling([10, 20, 30, 40, 50, 60], 3, 300));


// function solve(array, startIndex, endIndex) {
// 	if (Array.isArray(array) == false) {
// 		return NaN;
// 	}
// 	if (startIndex < 0) {
// 		startIndex = 0;
// 	}
// 	if (endIndex > array.length - 1) {
// 		endIndex = array.length - 1;
// 	}
// 	return array
// 		.slice(startIndex, endIndex + 1)
// 		.map(Number)
// 		.reduce((acc, x) => acc + x, 0);
// }