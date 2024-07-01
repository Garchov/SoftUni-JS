function schoolGrades(array) {
  let studentInfo = {};
  for (let i = 0; i < array.length; i++) {
    let [name, ...grades] = array[i].split(" ");
    grades = grades.map(Number); // Convert each grade to a number

    if (!studentInfo.hasOwnProperty(name)) {
      studentInfo[name] = grades;
    } else {
      studentInfo[name] = studentInfo[name].concat(grades); // Concatenate new grades
    }
  }
  let arrayOfPersonInfo = Object.entries(studentInfo);
  let sorted = arrayOfPersonInfo.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name, grades] of sorted) {
    let average = grades.reduce((sum, grade) => sum + grade) / grades.length; // Calculate average using reduce
    console.log(`${name}: ${average.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
