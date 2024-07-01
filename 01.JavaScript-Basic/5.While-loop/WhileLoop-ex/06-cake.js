function cake(input) {
  let cakeWidth = Number(input[0]);
  let cakeHeight = Number(input[1]);

  let index = 2;
  let command = input[index];
  index++;

  let totalCakePieces = cakeHeight * cakeWidth;

  while (command !== "STOP") {
    let = cakePieces = Number(command);

    totalCakePieces -= cakePieces;

    if (totalCakePieces <= 0) {
      let piecesNeeded = Math.abs(totalCakePieces);
      console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
      break;
    }

    command = input[index];
    index++;
  }

  if (command === "STOP") {
    console.log(`${totalCakePieces} pieces are left.`);
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
