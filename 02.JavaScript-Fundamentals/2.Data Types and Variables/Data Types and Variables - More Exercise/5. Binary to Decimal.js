function binaryToDecimal(binaryNumber) {
  let decimalNumber = 0;
  let asString = binaryNumber.toString();
  let length = asString.length;

  for (let i = 0; i < length; i++) {
    let bit = asString[length - 1 - i];
    decimalNumber += bit * Math.pow(2, i);
  }

  console.log(decimalNumber);
}
binaryToDecimal(11110000);
