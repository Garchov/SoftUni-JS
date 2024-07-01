function test(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);

  let countPieces = 0;
  let index = 2;
  let command = input[index];
  index++;
  while (command !== "STOP" && countPieces < width * length) {
    let onePiece = Number(command);

    countPieces += onePiece;
    command = input[index];
    index++;
  }
  if (countPieces < width * length) {
    console.log(`${width * length - countPieces} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${countPieces - width * length} pieces more.`
    );
  }
}
test(["10", "10", "20", "20", "20", "20", "21"]);


