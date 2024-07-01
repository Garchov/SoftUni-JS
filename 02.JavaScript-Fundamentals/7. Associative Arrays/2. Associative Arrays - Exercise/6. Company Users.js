function companyUsers(array) {
  let companyEmployees = {};

  for (const line of array) {
    let [company, id] = line.split("->");
    if (company in companyEmployees) {
      if (!companyEmployees[company].includes(id)) {
        companyEmployees[company].push(id);
      }
    } else {
      companyEmployees[company] = [id];
    }
  }
  let list = Object.entries(companyEmployees).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (const [company, id] of list) {
    console.log(company);
    for (const employeeId of id) {
      console.log(`--${employeeId}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])
    ;
