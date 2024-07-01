function sumSeconds(input) {
  let firstTime = Number(input[0]);
  let secondTime = Number(input[1]);
  let thirdTime = Number(input[2]);

  totalTime = firstTime + secondTime + thirdTime;
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60; // използваме % за да може да се намери остатъка от секундите, тоест 124 % 60 = 4 |
  ///   тъй като 124 има две цели числа от 60 + 60 и остава два пъти от 2 + 2.
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

sumSeconds(["35", "45", "44"]);
