function multiplicationTable(input) {
  let num = Number(input[0]);
  let result = 0;

  for (i = 1; i <= 10; i++) {
    let total = i * num;
    result = `${i} * ${num} = ${total}`;
    console.log(result);
  }
}
multiplicationTable(["5"]);
