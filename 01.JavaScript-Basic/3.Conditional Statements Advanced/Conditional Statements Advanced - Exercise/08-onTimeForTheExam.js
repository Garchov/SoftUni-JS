function onTimeForTheExam(input) {
  let examHour = Number(input[0]);
  let examMin = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMin = Number(input[3]);

  let totalExamTime = examHour * 60 + examMin;
  let totalArrivalTime = arrivalHour * 60 + arrivalMin;

  let totalDiffTime = Math.abs(totalExamTime - totalArrivalTime);
  let diffHour = Math.floor(totalDiffTime / 60);
  let diffMin = totalDiffTime % 60;

  if (totalExamTime === totalArrivalTime) {
    console.log("On time");
  } else if (totalExamTime < totalArrivalTime) {
    console.log("Late");

    if (totalDiffTime < 60) {
      console.log(`${totalDiffTime} minutes after the start`);
    } else {
      if (diffMin < 10) {
        console.log(`${diffHour}:0${diffMin}hours after the start`);
      } else {
        console.log(`${diffHour}:${diffMin}hours after the start`);
      }
    }
  } else {
    if (totalDiffTime <= 30) {
      console.log("On time");
      console.log(`${totalDiffTime} minutes before the start`);
    } else {
      console.log("Early");
    }
    if (totalDiffTime < 60) {
      console.log(`${totalDiffTime} minutes before the start`);
    } else {
      if (diffMin < 10) {
        console.log(`${diffHour}:0${diffMin}hours before the start`);
      } else {
        console.log(`${diffHour}:${diffMin}hours before the start`);
      }
    }
  }
}
onTimeForTheExam(["9", "30", "9", "50"]);

/*
// час на пристигане = hArr + mArr;
// ako часът на изпита === часът на пристигане || часът на пристигане >=30)- ДОШЪЛ НА ВРЕМЕ
//ако часът на изпита > часът на пристифнане ||часът на пристигане > 30 )-Подранил
//ако часът на изпита < часът на пристифнане || часът на пристигане =< 60) закъснял 


// •	"Late", ако студентът пристига по-късно от часа на изпита.
// (ако е дошъл 1 час по късно от (време на изпита ) е закъснял)
// •	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
// •	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.

 Студент трябва да дойде на изпит имаме час на пристингата и час на започване на изпита.

 Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това.
  (време на изпита == време на изпита || 30 минути по-рано), ако е пристинал с повече от 30 мин по-рано е подранил.
  ако е дошъл 1 час по късно от (време на изпита ) е закъснял
  Напишете функция, която получава време на изпит и време на пристигане. 
  отпечатва дали студентът е дошъл навреме
  дали е подранил или е закъснял и с колко часа или минути е подранил или закъснял.

  На първият ред отпечатайте:
•	"Late", ако студентът пристига по-късно от часа на изпита.
•	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
•	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
•	"mm minutes before the start" за идване по-рано с по-малко от 1.
•	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
•	 "mm minutes after the start" за закъснение под час.
•	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".

*/
