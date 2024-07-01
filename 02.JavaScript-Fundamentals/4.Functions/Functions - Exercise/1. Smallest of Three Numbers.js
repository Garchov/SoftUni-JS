/* function smallestOfThreeNumbers(params) {
  let smallestNumber = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < params.length; i++) {
    if (params[i] < smallestNumber) {
      smallestNumber = params[i];
    }
  }
  return smallestNumber;
}
console.log(smallestOfThreeNumbers([2, 5, 3])); */


function smallestOfThreeNumbers(number1,number2, number3 ) {

let minNumber = Math.min(number1,number2,number3);
return minNumber
}
console.log(smallestOfThreeNumbers(2, 5, 3));

/*function smallestOfTwoNumber(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

function smallestOfThreeNumber(num1, num2, num3) {
    let smallestOfTwo = smallestOfTwoNumber(num1, num2);
    return smallestOfTwoNumber(smallestOfTwo, num3);
}

let result = smallestOfThreeNumber(2, 5, 3);
console.log(result);

*/