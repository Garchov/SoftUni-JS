function timesPlus15Minutes(input) {
  let hour = Number(input[0]);
  let min = Number(input[1]);

  let mins = hour * 60 + min + 15;

  let newHour = Math.floor(mins / 60) % 24;

  let newMin = mins % 60;

  if (newMin < 10) {
    console.log(`${newHour}:0${newMin}`);
  } else {
    console.log(`${newHour}:${newMin}`);
  }
}

timesPlus15Minutes(["23", "59"]);
