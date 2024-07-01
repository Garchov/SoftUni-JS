function calc() {
  let firstNumElement = document.getElementById("num1");
  let secondNumElement = document.getElementById("num2");

  let firstNumber = Number(firstNumElement.value);
  let secondNumber = Number(secondNumElement.value);
  let sum = firstNumber + secondNumber;
  let resultEl = document.getElementById("sum");
  resultEl.value = sum;
}
