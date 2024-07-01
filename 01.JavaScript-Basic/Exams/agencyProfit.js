function agencyProfit(input) {
  let companyName = input[0];
  let countAdultTicket = Number(input[1]);
  let countKidsTicket = Number(input[2]);
  let netpriceForAdult = Number(input[3]);
  let servicePrice = Number(input[4]);

  let profit = 0;

  let priceAdult = netpriceForAdult + servicePrice;
  let netKidsPrice = netpriceForAdult * 0.3 + servicePrice;
  let TotalKidsPrice = netKidsPrice * countKidsTicket;
  let TotalAdultPrice = priceAdult * countAdultTicket;
  profit = TotalKidsPrice + TotalAdultPrice;

  let companyProfit = (profit * 0.2).toFixed(2);

  console.log(
    `The profit of your agency from ${companyName} tickets is ${companyProfit} lv.`
  );
}
agencyProfit(["WizzAir", "15", "5", "120", "40"]);
