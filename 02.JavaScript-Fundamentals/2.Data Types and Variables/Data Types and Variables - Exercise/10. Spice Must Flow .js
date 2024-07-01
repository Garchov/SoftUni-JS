function spiceMustFlow(startingYield) {
  let spiceExtracted = 0;
  let dayCounter = 0;

  while (startingYield >= 100) {
    dayCounter++;
    spiceExtracted += startingYield - 26;
    startingYield -= 10;
  }
  console.log(dayCounter);
  if (dayCounter !== 0) {
    console.log(spiceExtracted - 26);
  } else {
    console.log(spiceExtracted);
  }
}
spiceMustFlow(111);
