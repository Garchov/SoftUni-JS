function sumDigits(num) {
  let numAsString = num.toString();
  let sum = 0;
  for (let curStr = 0; curStr < numAsString.length; curStr++) {
    let digit = Number(numAsString[curStr]);
    sum += digit;
  }
  console.log(sum);
}
sumDigits(245678);
