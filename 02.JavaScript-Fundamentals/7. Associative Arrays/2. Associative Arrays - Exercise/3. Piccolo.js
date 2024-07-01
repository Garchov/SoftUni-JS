function piccolo(array) {
  let carRecord = {};
  for (const record of array) {
    let [direction, numberPlate] = record.split(",");
    if (direction === "IN") {
      carRecord[numberPlate] = numberPlate;
    }
    if (direction === "OUT") {
      delete carRecord[numberPlate];
    }
  }
  if (Object.keys(carRecord).length === 0) {
    console.log(`Parking Lot is Empty.`);
  }
  let updatedRecord = Object.entries(carRecord).sort();
  for (const plate of updatedRecord) {
    console.log(plate[1]);
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
