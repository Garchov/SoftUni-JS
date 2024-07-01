function printAnArrayWithAGivenDelimiter(element, separator) {
  return element.join(separator);
}
console.log(
  printAnArrayWithAGivenDelimiter(["One", "Two", "Three", "Four", "Five"], "-")
);
