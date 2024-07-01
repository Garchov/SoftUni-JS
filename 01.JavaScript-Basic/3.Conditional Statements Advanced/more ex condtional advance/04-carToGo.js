function carToGo(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let classes = "";
  let totalPrice = 0;
  let carType = "";
  let price = 0;

  if (season === "Summer") {
    if (budget <= 100) {
      classes = "Economy class";
      price = 0.45 * budget;
      carType = "cabrio";
    } else if (budget > 100 && budget <= 500) {
      price = 0.45 * budget;
      carType = "cabrio";
      classes = "Compact class";
    }
  }

  if (season === "Winter") {
    if (budget <= 100) {
      price = 0.65 * budget;
      classes = "Economy class";
      carType = "jeep";
    } else if (budget > 100 && budget <= 500) {
      price = 0.8 * budget;
      classes = "Compact class";
      carType = "jeep";
    } else if (budget > 500) {
      price = 0.9 * budget;
      classes = "Luxury class";
      carType = "jeep";
    }
  }
  totalPrice = price * budget;

  console.log(`${classes}`);
  console.log(`${carType} - ${totalPrice.toFixed(2)}`);
}

carToGo(["450", "Summer"]);
