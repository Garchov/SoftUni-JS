function test(input) {
  let gradesSum = 0;
  let gradesCount = 0;

  let judgesCount = Number(input[0]);
  let index = 1;
  let command = input[index];
  index++;
  while (command !== "Finish") {
    let presentation = command;

    let presGradeSum = 0;
    let presGradesCount = judgesCount;

    for (let curjedge = 1; curjedge <= judgesCount; curjedge++) {
      let curGrade = Number(input[index]);
      index++;

      presGradeSum += curGrade;
    }

    let presentationAverageGrade = presGradeSum / presGradesCount;
    console.log(`${presentation} - ${presentationAverageGrade.toFixed(2)}.`);

    gradesCount++;
    gradesSum += presentationAverageGrade;

    command = input[index];
    index++;
  }
  let avarageGrade = gradesSum / gradesCount;
  console.log(`Student's final assessment is ${avarageGrade.toFixed(2)}.`);
}
test(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
