function safari(input) {
    let budget = Number(input[0]);
    let fuelLiter = Number(input[1]);
    let dayWeek = input[2];

    let fuelPrice = 2.10;
    let tripPrice = 100;
    let totalPriceTrip = fuelLiter * fuelPrice + tripPrice;
    let discount = 0;
    
    if (dayWeek === "Saturday") {
        discount += totalPriceTrip * 0.10;

    } else if (dayWeek === "Sunday") {
        discount += totalPriceTrip * 0.20;

    }
    let total = budget - (totalPriceTrip - discount);
    

    if (total >=0) {
        console.log(`Safari time! Money left: ${total.toFixed(2)} lv.`);

    } else{
        console.log(`Not enough money! Money needed: ${Math.abs(total - budget).toFixed(2)} lv.`);
    }
}
safari(["120",
    "30",
    "Saturday"
]);