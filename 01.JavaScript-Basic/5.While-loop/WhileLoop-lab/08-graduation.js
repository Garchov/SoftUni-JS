function graduation(input) {
  let name = input[0];
  let annualGrade = 1;
  let sumGrade = 0;

  let currentGrade = Number(input[annualGrade]);
  let excluded = 0;

  while (annualGrade <= 12) {
    if (currentGrade < 4) {
      excluded++;
    }
    if (excluded > 1) {
      console.log(`${name} has been excluded at ${annualGrade - 1} grade`);
      break;
    }
    sumGrade += currentGrade;
    annualGrade++;
    currentGrade = Number(input[annualGrade]);
  }
  let averageGrade = sumGrade / 12;

  if (excluded < 2) {
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
  }
}
graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
