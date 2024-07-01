function simpleCalculator(first, second, operator) {
  let multiply = (first, second) => first * second;
  let divide = (first, second) => first / second;
  let add = (first, second) => first + second;
  let subtract = (first, second) => first - second;
  switch (operator) {
    case "multiply":
      return multiply(first, second);
    case "divide":
      return divide(first, second);
    case "add":
      return add(first, second);
    case "subtract":
      return subtract(first, second);
  }
}
console.log(simpleCalculator(5, 5, "multiply"));
