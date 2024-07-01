function factorialDivision(firstNum, secondNum) {
/*   let firstFactorial = calculateFactorial(firstNum);
  let secondFactorial = calculateFactorial(secondNum);

  let result = firstFactorial / secondFactorial;

  console.log(result.toFixed(2));

  function calculateFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  } */
  let firstFactorial =  calculateFactorial(firstNum);
  let secondFactorial =   calculateFactorial(secondNum);

  let result = firstFactorial / secondFactorial;
  console.log(result.toFixed(2));

  function calculateFactorial(num) {
      let factorial = 1;
      while(num> 1){
        factorial *= num
        num--;
      }
      return factorial;
}
}

factorialDivision(5, 2);    
