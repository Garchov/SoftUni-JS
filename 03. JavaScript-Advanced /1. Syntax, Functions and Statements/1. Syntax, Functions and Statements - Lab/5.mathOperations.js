function mathOpearations(num1, num2, operation) {
  let sum = 0;

  switch (operation) {
    case "+":
      sum = num1 + num2;
      break;
    case "-":
      sum = num1 - num2;
      break;
    case "*":
      sum = num1 * num2;
      break;
    case "/":
      sum = num1 / num2;
      break;
    case "%":
      sum = num1 % num2;

    case "**":
      sum = Math.pow(num1, num2);
      break;
  }
  console.log(sum);
}
mathOpearations(5, 6, "+");
mathOpearations(3, 5.5, "*");

// function mathOperations(opA, opB, operator) {
// 	let commandParser = {
// 		"+"(a, b) {
// 			return a + b;
// 		},
// 		"-"(a, b) {
// 			return a - b;
// 		},
// 		"*"(a, b) {
// 			return a * b;
// 		},
// 		"/"(a, b) {
// 			return a / b;
// 		},
// 		"%"(a, b) {
// 			return a % b;
// 		},
// 		"**"(a, b) {
// 			return a ** b;
// 		},
// 	};
// 	let result = commandParser[operator](opA, opB);
// 	console.log(result);
// }
// mathOperations(3, 5.5, "*");
