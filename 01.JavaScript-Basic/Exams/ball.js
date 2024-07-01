function ball(input) {
  let n = Number(input[0]);
  let point = 0;
  let redBalls = 0;
  let orangeBalls = 0;
  let yellowBalls = 0;
  let whiteBalls = 0;
  let otherColors = 0;
  let dividedByBlack = 0;
  let totalPoints = 0;

  for (i = 1; i <= n; i++) {
    let color = input[i];

    switch (color) {
      case "red":
        point += 5;
        redBalls++;
        break;
      case "orange":
        point += 10;
        orangeBalls++;
        break;
      case "yellow":
        point += 15;
        yellowBalls++;
        break;

      case "white":
        point += 20;
        whiteBalls++;
        break;

      case "black":
        point = Math.floor(point / 2);
        dividedByBlack++;
        break;
      default:
        otherColors++;
        break;
    }
  }
  totalPoints = point;

  console.log(`Total points: ${totalPoints}`);
  console.log(`Red balls: ${redBalls}`);
  console.log(`Orange balls: ${orangeBalls}`);
  console.log(`Yellow balls: ${yellowBalls}`);
  console.log(`White balls: ${whiteBalls}`);
  console.log(`Other colors picked: ${otherColors}`);
  console.log(`Divides from black balls: ${dividedByBlack}`);
}

ball(["3", "white", "black", "pink"]);
