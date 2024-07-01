function calculator(...symbols) {
  let num1 = Number(symbols[0]);
  let num2 = Number(symbols[2]);
  let result = 0;

  if (symbols[1] === "*") {
    result = num1 * num2;
    console.log(`${result.toFixed(2)}`);
  }
  if (symbols[1] === "-") {
    result = num1 - num2;
    console.log(`${result.toFixed(2)}`);
  }
  if (symbols[1] === "/") {
    result = num1 / num2;
    console.log(`${result.toFixed(2)}`);
  }
  if (symbols[1] === "+") {
    result = num1 + num2;
    console.log(`${result.toFixed(2)}`);
  }
}
calculator(5, "+", 10);
calculator(25.5, "-", 3);
