function test(currentBookPages, pagesForHour, needDaysRead) {
  let totalHourPerDay = currentBookPages / pagesForHour;
  let requiredDaysRead = totalHourPerDay / needDaysRead;

  console.log(requiredDaysRead);
}
