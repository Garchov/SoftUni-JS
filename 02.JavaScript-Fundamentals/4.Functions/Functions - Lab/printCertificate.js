function printCertificate(grade, names) {
  if (pass(grade)) {
    printHeader();
    printName(names);
    formatGrade(grade);
  } else {
    console.log("Student does not qualify");
  }
  function printHeader() {
    console.log("~~~-   {@}   -~~~");
    console.log("~- Certificate -~");
    console.log("~~~-  ~---~  -~~~");
  }
  function printName(nameArr) {
    console.log(nameArr[0] + " " + nameArr[1]);
  }
  function formatGrade(inputGrade) {
    let formattedGrade = inputGrade.toFixed(2);
    let description;

    if (inputGrade < 3) {
      description = "Fail";
      formattedGrade = 2;
    } else if (inputGrade < 3.5) {
      description = "Poor";
    } else if (inputGrade < 4.5) {
      description = "Good";
    } else if (inputGrade < 5.5) {
      description = "Very good";
    } else {
      description = "Excellent";
    }
    console.log(`${description} (${formattedGrade})`);
  }
  function pass(grade) {
    return grade >= 3;
  }
}
printCertificate(5.25, ["John", "Smith"]);
printCertificate(4.3, ["George", "Victur"]);
printCertificate(2.9, ["Peter", "Nedvils"]);
