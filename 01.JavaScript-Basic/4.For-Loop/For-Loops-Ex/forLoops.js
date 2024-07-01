function test(input) {
  let period = Number(input[0]);
  let doctors = 7;
  let treatedPatients = 0;
  let untreatedPatients = 0;

  for (let day = 1; day <= period; day++) {
    let patientsForDay = Number(input[day]);

    if (day % 3 === 0) {
      if (untreatedPatients > treatedPatients) {
        doctors += 1;
      }
    }

    if (doctors >= patientsForDay) {
      treatedPatients += patientsForDay;
    } else {
      treatedPatients += doctors;
      untreatedPatients += patientsForDay - doctors;
    }
  }

  console.log("Treated patients: " + treatedPatients + ".");
  console.log("Untreated patients: " + untreatedPatients + ".");
}

test(["6", "25", "25", "25", "25", "25", "2"]);
