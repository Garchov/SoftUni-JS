function transportCost(input) {
  let totalGoods = Number(input[0]);
  let microbusTons = 0;
  let truckTons = 0;
  let trainTons = 0;

  for (let i = 1; i <= totalGoods; i++) {
    let weight = Number(input[i]);

    if (weight <= 3) {
      microbusTons += weight;
    } else if (weight >= 4 && weight <= 11) {
      truckTons += weight;
    } else {
      trainTons += weight;
    }
  }

  let microbusCost = microbusTons * 200;
  let truckCost = truckTons * 175;
  let trainCost = trainTons * 120;
  let totalCost = microbusCost + truckCost + trainCost;
  let totalWeight = microbusTons + truckTons + trainTons;
  let averageCostPerTon = totalCost / totalWeight;
  let microbusPercentage = (microbusTons / totalWeight) * 100;
  let truckPercentage = (truckTons / totalWeight) * 100;
  let trainPercentage = (trainTons / totalWeight) * 100;

  console.log(averageCostPerTon.toFixed(2));
  console.log(microbusPercentage.toFixed(2) + "%");
  console.log(truckPercentage.toFixed(2) + "%");
  console.log(trainPercentage.toFixed(2) + "%");
}



transportCost(["5", "2", "8", "15", "4", "10"]);
