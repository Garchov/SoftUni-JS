/*
function dayOfWeek(day) {
  if (day < 1 || day > 7) {
    console.log("Invalid day!");
  } else {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let index = day - 1;
    console.log(days[index]);
  }
}
*/
function numToday(num){
  return num <=7 && num >=1 ? ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] [num-1] : 'Invalid day!';

}
console.log(numToday(1))
console.log(numToday(6))
console.log(numToday(3))
console.log(numToday(-3))
console.log(numToday(33))


