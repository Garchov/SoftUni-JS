function examPrep(input) {
  let weakGrades = Number(input[0]);

  let index = 1;
  let command = input[index];
  index++;

  let gradesCount = 0;
  let gradesSum = 0;
  let badGradesCount = 0;
  let exirciseName = "";

  while (command !== "Enough") {
    exirciseName = command;
    let problemGrade = Number(input[index]);
    index++;

    if (problemGrade <= 4) {
      badGradesCount++;
    }
    if (badGradesCount === weakGrades) {
      console.log(`You need a break, ${badGradesCount} poor grades.`);
      break;
    }

    gradesSum += problemGrade;
    gradesCount++;

    command = input[index];
    index++;
  }
  if (command === "Enough") {
    let avarageGrade = gradesSum / gradesCount;
    console.log(`Average score: ${avarageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${exirciseName}`);
  }
}
examPrep([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
