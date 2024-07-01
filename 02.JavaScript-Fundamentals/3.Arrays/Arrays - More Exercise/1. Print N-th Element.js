function printNthElement(arr) {
  let n = parseInt(arr[arr.length - 1]);
  let result = [];
  for (let i = 0; i < arr.length - 1; i += n) {
    result.push(arr[i]);
  }
  console.log(result.join(" "));
}
printNthElement(["5", "20", "31", "4", "20", "2"]);
console.log("...");
printNthElement(["dsa", "asd", "test", "test", "2"]);
console.log("...");
printNthElement(["1", "2", "3", "4", "5", "6"]);
