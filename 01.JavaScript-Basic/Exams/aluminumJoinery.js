function aluminumJoinery(input) {
  let quantity = Number(input[0]);
  let type = input[1];
  let delivery = input[2];

  let price = 0;

  switch (type) {
    case "90X130":
      price = 110 * quantity;
      if (quantity > 30 && quantity <= 60) {
        price *= 0.95;
      } else if (quantity > 60) {
        price *= 0.92;
      }
      break;
    case "100X150":
      price = 140 * quantity;
      if (quantity > 40 && quantity <= 80) {
        price *= 0.94;
      } else if (quantity > 80) {
        price *= 0.9;
      }
      break;
    case "130X180":
      price = 190 * quantity;
      if (quantity > 20 && quantity <= 50) {
        price *= 0.93;
      } else if (quantity > 50) {
        price *= 0.88;
      }
      break;
    case "200X300":
      price = 250 * quantity;
      if (quantity > 25 && quantity <= 50) {
        price *= 0.91;
      } else if (quantity > 50) {
        price *= 0.86;
      }
      break;
  }

  if (quantity > 99) {
    price *= 0.96;
  }

  if (delivery === "With delivery") {
    price += 60;
  }

  if (quantity < 10) {
    console.log("Invalid order");
  } else {
    console.log(`${price.toFixed(2)} BGN`);
  }
}
aluminumJoinery(["2", "90X130", "Without delivery"]);
