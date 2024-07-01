function vacation(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let location = "";
  let place = "";
  let price = 0;

  if (budget <= 1000) {
    place = "Camp";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.65;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.45;
    }
  } else if (budget > 1000 && budget <= 3000) {
    place = "Hut";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.8;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.6;
    }
  } else if (budget > 3000) {
    place = "Hotel";
    location = season === "Summer" ? "Alaska" : "Morocco";
    price = budget * 0.9;
  }

  console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}

vacation(["799.50", "Winter"]);
