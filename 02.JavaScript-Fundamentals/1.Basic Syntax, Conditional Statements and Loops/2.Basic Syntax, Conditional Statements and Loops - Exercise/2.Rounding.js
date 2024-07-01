function rounding(number, decimalPlace) {
  if (decimalPlace >= 15) {
    decimalPlace = 15;
  }
  let parsedNumber = number.toFixed(decimalPlace);

  console.log(parseFloat(parsedNumber));
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);
