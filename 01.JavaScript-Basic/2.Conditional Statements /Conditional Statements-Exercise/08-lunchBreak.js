function lunchBreak(input) {
  let seriesName = input[0];

  let seriesDuration = Number(input[1]);

  let breakDuaration = Number(input[2]);

  let lunchTime = (breakDuaration * 1) / 8;

  let restTime = (breakDuaration * 1) / 4;
  let leftTime = breakDuaration - lunchTime - restTime;

  if (leftTime >= seriesDuration) {
    let freeTime = leftTime - seriesDuration;
    console.log(
      `You have enough time to watch ${seriesName} and left with ${Math.ceil(
        freeTime
      )} minutes free time.`
    );
  } else {
    let needeedTime = seriesDuration - leftTime;
    console.log(
      `You don't have enough time to watch ${seriesName}, you need ${Math.ceil(
        needeedTime
      )} more minutes.`
    );
  }
}

lunchBreak(["Teen Wolf", "48", "60"]);

