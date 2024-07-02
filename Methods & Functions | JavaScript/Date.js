//* Date object=Objects that contain values that represent a date and times
//*                 These date objects can changed the formatted

//* Date(year, month, day, hour, minute, second, ms)
const date = new Date(2024,12,23,2,49,30,0);
const date1 = new Date('2024-12-02T02:49:30.000Z');
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const dayOfWeek = date.getDay();

date.setFullYear(2024);
date.setMonth(11);
date.setDate(23);
date.setHours(2);
date.setMinutes(49);
date.setSeconds(30);
date.setMilliseconds(0);