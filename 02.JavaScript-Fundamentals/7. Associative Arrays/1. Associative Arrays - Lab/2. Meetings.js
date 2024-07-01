function meetings(array) {
  let meetings = {};
  for (const key in array) {
    let [dayOfweek, name] = array[key].split(" ");
    if (!meetings.hasOwnProperty(dayOfweek)) {
      console.log(`Scheduled for ${dayOfweek}`);
      meetings[dayOfweek] = name;
    } else {
      console.log(`Conflict on ${dayOfweek}!`);
    }
  }
  for (const key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
