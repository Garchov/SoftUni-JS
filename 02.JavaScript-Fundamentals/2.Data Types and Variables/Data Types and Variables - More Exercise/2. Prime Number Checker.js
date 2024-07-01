function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number === 2 || number === 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  return true;
}
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(81));
