function operationsBetweenNumbers(input) {
  let N1 = Number(input[0]);
  let N2 = Number(input[1]);
  let operater = input[2];
  let result = 0;

  if (operater == "+" || operater == "-" || operater == "*") {
    if (operater == "+") {
      result = N1 + N2;
    } else if (operater == "-") {
      result = N1 - N2;
    } else if (operater == "*") {
      result = N1 * N2;
    }

    if (result % 2 == 0) {
      console.log(`${N1} ${operater} ${N2} = ${result} - even `);
    } else {
      console.log(`${N1} ${operater} ${N2} = ${result} - odd `);
    }
  } else if (operater == "/") {
    if (N2 !== 0) {
      result = (N1 / N2).toFixed(2);
      console.log(`${N1} ${operater} ${N2} = ${result}`);
    } else {
      console.log(`Cannot divide ${N1} by zero`);
    }
  } else if (operater == "%") {
    if (N2 !== 0) {
      result = N1 % N2;
      console.log(`${N1} ${operater} ${N2} = ${result}`);
    } else {
      console.log(`Cannot divide ${N1} by zero`);
    }
  }
}

operationsBetweenNumbers(["123", "12", "/"]);
