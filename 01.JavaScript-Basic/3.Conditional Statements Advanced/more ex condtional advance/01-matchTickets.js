function matchTicket(input) {
  let budget = Number(input[0]);
  let ticketType = input[1];
  let peopleCount = Number(input[2]);

  let ticketPrice = 0;
  let transportPrice = 0;
  let totalCost = 0;

  switch (ticketType) {
    case "VIP":
      ticketPrice = 499.99;
      if (peopleCount >= 1 && peopleCount <= 4) {
        transportPrice = budget * 0.75;
      } else if (peopleCount <= 9) {
        transportPrice = budget * 0.6;
      } else if (peopleCount <= 24) {
        transportPrice = budget * 0.5;
      } else if (peopleCount <= 49) {
        transportPrice = budget * 0.4;
      } else {
        transportPrice = budget * 0.25;
      }

      totalCost = ticketPrice * peopleCount + transportPrice;

      if (budget >= totalCost) {
        console.log(
          `Yes! You have ${(budget - totalCost).toFixed(2)} leva left.`
        );
      } else {
        console.log(
          `Not enough money! You need ${(totalCost - budget).toFixed(2)} leva.`
        );
      }
      break;
    case "Normal":
      ticketPrice = 249.99;
      if (peopleCount >= 1 && peopleCount <= 4) {
        transportPrice = budget * 0.75;
      } else if (peopleCount <= 9) {
        transportPrice = budget * 0.6;
      } else if (peopleCount <= 24) {
        transportPrice = budget * 0.5;
      } else if (peopleCount <= 49) {
        transportPrice = budget * 0.4;
      } else {
        transportPrice = budget * 0.25;
      }

      totalCost = ticketPrice * peopleCount + transportPrice;

      if (budget > totalCost) {
        console.log(
          `Yes! You have ${(budget - totalCost).toFixed(2)} leva left.`
        );
      } else {
        console.log(
          `Not enough money! You need ${(totalCost - budget).toFixed(2)} leva.`
        );
      }
  }
}

matchTicket(["30000", "VIP", "49"]);
