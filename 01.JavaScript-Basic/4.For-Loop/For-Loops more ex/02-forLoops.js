function forLoops(input) {
  let period = Number(input[0]);
  let doctors = 7;
  let countDays = 0;
  let treated = 0;
  let untreated = 0;
  let day = 1;

  for (let i = 1; i <= period; i++) {
    let patient = Number(input[1]);
    if (patient === doctors) {
      treated += doctors;
      untreated += patient - 1;
    } else {
      treated += patient;
    }
    day++;
    if (day % 3 === 0) {
      if (untreated > treated) {
        doctors++;
      }
    }
  }
  console.log(`Treated patients: ${treated}.`);
  console.log(`Untreated patients: ${untreated}.`);
}
forLoops(["4", "7", "27", "9", "1"]);
