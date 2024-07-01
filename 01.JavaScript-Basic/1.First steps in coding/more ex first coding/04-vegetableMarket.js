function vegatableMarket (input){
    let priceKiloVeg = Number (input[0]);
    let priceKiloFruit = Number (input[1]);
    let totalKiloVeg = Number (input[2]);
    let totalKiloFruit = Number (input[3]);
    let euro = 1.94

   let totalPriceVeg = priceKiloVeg * totalKiloVeg;
   let totalPriceFruit = priceKiloFruit * totalKiloFruit;
   let total = (totalPriceFruit + totalPriceVeg) / euro;
   console.log(total.toFixed(2));



}
vegatableMarket(["0.194", "19.4", "10", "10"]);
