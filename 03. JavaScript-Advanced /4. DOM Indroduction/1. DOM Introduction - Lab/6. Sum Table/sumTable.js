function sumTable() {
  let costElements = document.querySelectorAll('tr td:nth-of-type(2)');
  let sum = Array.from(costElements).reduce((a, x) => {
    let currentValue = Number(x.textContent) || 0;
    return a + currentValue;
  }, 0);
  let resultElement = document.getElementById("sum");
  resultElement.textContent = sum;
}

// function sumTable() {
//   let priceTdElements = document.querySelectorAll(
//     "table tr td:nth-of-type(2):not(#sum)"
//   );
//   let totalPrice = 0;

//   const sumTdElement = document.getElementById("sum");

//   for (const tdElements of priceTdElements) {
//     let price = Number(tdElements.textContent);
//     totalPrice += price;
//   }
//   sumTdElement.textContent = totalPrice;
// }