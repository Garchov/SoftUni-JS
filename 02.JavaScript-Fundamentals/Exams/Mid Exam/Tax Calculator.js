function calculateTax(input) {
  if (Array.isArray(input)) {
    input = input.join(">>");
  }

  let vehicles = input.split(">>");
  let totalTaxCollected = 0;

  for (let vehicle of vehicles) {
    let vehicleParts = vehicle.split(" ");
    if (vehicleParts.length !== 3) {
      console.log("Invalid vehicle format:", vehicle);
      continue;
    }

    let [carType, yearsStr, kilometersStr] = vehicleParts;
    let years = parseInt(yearsStr);
    let kilometers = parseInt(kilometersStr);

    if (isNaN(years) || isNaN(kilometers)) {
      console.log("Invalid years or kilometers:", vehicle);
      continue;
    }

    let tax = 0;

    switch (carType) {
      case "family":
        tax = 50 - 5 * years + Math.floor(kilometers / 3000) * 12;
        break;
      case "heavyDuty":
        tax = 80 - 8 * years + Math.floor(kilometers / 9000) * 14;
        break;
      case "sports":
        tax = 100 - 9 * years + Math.floor(kilometers / 2000) * 18;
        break;
      default:
        console.log("Invalid car type.");
        continue;
    }

    totalTaxCollected += tax;
    console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
  }

  console.log(
    `The National Revenue Agency will collect ${totalTaxCollected.toFixed(
      2
    )} euros in taxes.`
  );
}
calculateTax([
  "family 5 3210",
  "pickUp 1 1345",
  "heavyDuty 7 21000",
  "sports 5 9410",
  "family 3 9012",
]);
