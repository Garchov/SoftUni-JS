function addBags(input) {
  let priceLuggage20k = Number(input[0]);
  let luggageKilo = Number(input[1]);
  let dayTravel = Number(input[2]);
  let countLaggage = Number(input[3]);
  let luggagePrice = 0;

  if (luggageKilo <= 10) {
    luggagePrice = priceLuggage20k * 0.2;
  } else if (luggageKilo <= 20) {
    luggagePrice = priceLuggage20k * 0.5;
  } else if (luggageKilo > 20) {
    luggagePrice = priceLuggage20k;
  }
  if (dayTravel > 30) {
    luggagePrice += luggagePrice * 0.1;
  } else if (dayTravel > 7 && dayTravel <= 30) {
    luggagePrice += luggagePrice * 0.15;
  } else {
    luggagePrice += luggagePrice * 0.4;
  }
  7;

  let totalPrice = luggagePrice * countLaggage;
  console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}

addBags(["30", "18", "15", "2"]);
