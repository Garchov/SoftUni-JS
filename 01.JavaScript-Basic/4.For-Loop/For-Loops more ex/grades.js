function grades(input) {
  let studentsCount = Number(input[0]);

  let poorStudentSum = 0;
  let midiStudentSum = 0;
  let goodStudentSum = 0;
  let excellentStudentSum = 0;

  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  let totalSum = 0;

  for (let i = 1; i <= studentsCount; i++) {
    let grade = Number(input[i]);
    totalSum += grade;

    if (grade >= 2.0 && grade <= 2.99) {
      counter1++;
      poorStudentSum = (counter1 / studentsCount) * 100;
    } else if (grade >= 3.0 && grade <= 3.99) {
      counter2++;
      midiStudentSum = (counter2 / studentsCount) * 100;
    } else if (grade >= 4.0 && grade <= 4.99) {
      counter3++;
      goodStudentSum = (counter3 / studentsCount) * 100;
    } else if (grade >= 5.0) {
      counter4++;
      excellentStudentSum = (counter4 / studentsCount) * 100;
    }
  }
  let total = totalSum / studentsCount;
  console.log(`Top students: ${excellentStudentSum.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${goodStudentSum.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${midiStudentSum.toFixed(2)}%`);
  console.log(`Fail: ${poorStudentSum.toFixed(2)}%`);
  console.log(`Average: ${total.toFixed(2)}`);
}
grades([
  "10",
  "3.00",
  "2.99",
  "5.68",
  "3.01",
  "4",
  "4",
  "6.00",
  "4.50",
  "2.44",
  "5",
]);
