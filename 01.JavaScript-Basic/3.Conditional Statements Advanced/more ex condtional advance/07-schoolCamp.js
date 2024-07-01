function schoolCamp(input) {
  let season = input[0];
  let gender = input[1];
  let studentsCount = Number(input[2]);
  let nightCount = Number(input[3]);
  let sportType = "";
  let price = 0;
  let totalprice = 0;

  if (season === "Winter") {
    if (gender === "girls") {
      sportType = "Gymnastics";
      price = 9.6;
    } else if (gender === "boys") {
      sportType = "Judo";
      price = 9.6;
    } else {
      sportType = "Ski";
      price = 10;
    }
  }
  if (season === "Spring") {
    if (gender === "girls") {
      sportType = "Athletics";
      price = 7.2;
    } else if (gender === "boys") {
      sportType = "Tennis";
      price = 7.2;
    } else {
      sportType = "Cycling";
      price = 9.5;
    }
  }
  if (season === "Summer") {
    if (gender === "girls") {
      sportType = "Volleyball";
      price = 15;
    } else if (gender === "boys") {
      sportType = "Football";
      price = 15;
    } else {
      sportType = "Swimming";
      price = 20;
    }
  }
  totalprice = price * nightCount * studentsCount;
  if (studentsCount >= 50) {
    totalprice *= 0.5;
  } else if (studentsCount >= 20 && studentsCount < 50) {
    totalprice *= 0.85;
  } else if (studentsCount >= 10 && studentsCount < 20) {
    totalprice *= 0.95;
  }
  console.log(`${sportType} ${totalprice.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "girls", "20", "7"]);
