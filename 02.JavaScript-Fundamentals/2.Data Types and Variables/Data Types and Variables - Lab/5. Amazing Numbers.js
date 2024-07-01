function test(amazing) {
  let sum = 0;
  let numberAsString = String(amazing);

  for (let i = 0; i < numberAsString.length; i++) {
    sum += Number(numberAsString[i]);
  }
  let resultAsString = String(sum);
  let special = false;
  for (let i = 0; i < resultAsString.length; i++) {
    if (resultAsString[i] === "9") {
      special = true;
    }
  }
  console.log(`${numberAsString} Amazing? ${special ? "True " : "False"}`);
}
