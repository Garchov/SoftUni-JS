function trainingLab(input) {
 
  let height = Number(input[0]) * 100;
  let widht = Number (input[1]) * 100;

  let freeWidht = widht -100;
  let countDesksRow = Math.floor(freeWidht / 70);
  let conutDesksColumn = Math.floor(height /120);
  let totalSeets = (countDesksRow * conutDesksColumn) - 3;

  console.log(totalSeets);

}

trainingLab(['15','8.9']);

// Напишете програма, която въвежда размери на учебната зала и изчислява броя работни места в нея при описаното разположение (

//   Залата е широка 890 cm. От тях 100 cm отиват за коридора в средата. В останалите 790 cm могат да се разположат по 11 бюра на ред (11 * 70 cm = 770 cm + 20 cm остатък).
// Залата е дълга 1500 cm. В тях могат да бъдат разположени 12 реда (12 * 120 cm = 1440 + 60 cm остатък).
// Брой места = 12 * 11 - 3 =  132 - 3 = 129 (имаме 12 реда по 11 места = 132 минус 3 места за катедра и входна врата).
