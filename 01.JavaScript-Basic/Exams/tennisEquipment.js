function tennisEquipment(input) {
  let oneTennisRacket = Number(input[0]);
  let totalRacket = Number(input[1]);
  let twoShoes = Number(input[2]);

  let racketPrice = totalRacket * oneTennisRacket; //3400
  let priceforOneShoes = oneTennisRacket / 6; // 141.66
  let totalShoesPrice = priceforOneShoes * twoShoes; // 283.33
  let otherEquipment = (racketPrice + totalShoesPrice) * 0.2;

  let totalPrice = racketPrice + totalShoesPrice + otherEquipment;
  let priceToPay = totalPrice / 8;
  let priceForSpons = Math.ceil((totalPrice * 7) / 8);

  console.log(`Price to be paid by Djokovic ${Math.floor(priceToPay)}`);

  console.log(`Price to be paid by sponsors ${Math.floor(priceForSpons)}`);
}
tennisEquipment(["850", "4", "2"]);


