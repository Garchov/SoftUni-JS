function dayOFWeek(input) {
  let day = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,

  };
  if (day.hasOwnProperty(input)) {
    console.log(day[input]);
  } else {
    console.log("error");
  }
}
dayOFWeek("Monday");
dayOFWeek("Friday");
dayOFWeek("Invalid");


// function dayOfWeek(params) {
// 	let DayOfTheWeek = {
// 		Monday: 1,
// 		Tuesday: 2,
// 		Wednesday: 3,
// 		Thursday: 4,
// 		Friday: 5,
// 		Saturday: 6,
// 		Sunday: 7,
// 	};
// 	let res = DayOfTheWeek[params];
// 	typeof res === "undefined" ? console.log("error") : console.log(res);
// }
// dayOfWeek("Invalid");