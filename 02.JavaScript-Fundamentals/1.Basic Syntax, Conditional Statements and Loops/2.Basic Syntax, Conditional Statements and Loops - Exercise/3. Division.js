function division(num) {
  let biggestDiv = Number.MIN_SAFE_INTEGER;

  if (num % 6 === 0 && 6 > biggestDiv) {
    biggestDiv = 6;
  }
  if (num % 10 === 0 && 10 > biggestDiv) {
    biggestDiv = 10;
  }
  if (num % 7 === 0 && 7 > biggestDiv) {
    biggestDiv = 7;
  }
  if (num % 3 === 0 && 3 > biggestDiv) {
    biggestDiv = 3;
  }
  if (num % 2 === 0 && 2 > biggestDiv) {
    biggestDiv = 2;
  }

  if (biggestDiv !== Number.MIN_SAFE_INTEGER) {
    console.log(`The number is divisible by ${biggestDiv}`);
  } else {
    console.log("Not divisible");
  }
}
division(30);
division(15);
division(12);
division(1643);
