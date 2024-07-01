function vowelsSum(input) {
  let word = input[0];
  let num = 0;

  for (let i = 0; i < word.length; i++) {
    let chart = word[i];
    switch (chart) {
      case "a":
        num += 1;
        break;
      case "e":
        num += 2;
        break;
      case "i":
        num += 3;
        break;
      case "o":
        num += 4;
        break;
      case "u":
        num += 5;
        break;
    }
  }

  console.log(num);
}
vowelsSum(["bamboo"]);
