function squareOfStars(count) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result[i] = [];
    for (let y = 0; y < count; y++) {
      result[i][y] = "*";
    }
  }
  for (const star of result) {
    console.log(star.join(" "));
  }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
