function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let destination = "";
  let vacationType = "";
  let cost = 0;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      vacationType = "Camp";
      cost = budget * 0.3;
    } else if (season === "winter") {
      vacationType = "Hotel";
      cost = budget * 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      vacationType = "Camp";
      cost = budget * 0.4;
    } else if (season === "winter") {
      vacationType = "Hotel";
      cost = budget * 0.8;
    }
  } else {
    destination = "Europe";
    vacationType = "Hotel";
    cost = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${vacationType} - ${cost.toFixed(2)}`);
}

journey(["312", "summer"]);
