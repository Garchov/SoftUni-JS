function  previousDay(year, month, day) {
let previousDay = new Date(year, month-1 , day - 1);
console.log(`${previousDay.getFullYear()}-${previousDay.getMonth()+1}-${previousDay.getDate()}`);
}
previousDay(2016, 9, 30)