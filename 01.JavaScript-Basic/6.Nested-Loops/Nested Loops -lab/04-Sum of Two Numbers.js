function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);
  let combinations = 0;
  let donHaveValidComb = true;

  let sum = 0;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      combinations++;
      sum = i + j;
      if (sum === magicNumber) {
        donHaveValidComb = false;
        console.log(`Combination N:${combinations} (${i} + ${j} = ${sum}) `);
        return;
      }
    }
  }
  if (donHaveValidComb) {
    console.log(`${combinations} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["23", "24", "20"]);

/*

/*
}
if (sum !== magicNumber){
    
}
}

*/
