function multiplicationTable(num) {
  let times = 10;
  index = 1;
  let result = 0;
  while (index <= times) {
    result = num * index;
    console.log(`${num} X ${index} = ${result}`);

    index++;
  }
}
multiplicationTable(5);
