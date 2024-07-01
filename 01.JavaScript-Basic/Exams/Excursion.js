function excursion(input) {
    let peopleCount = Number(input[0]);
    let sleepCount = Number(input[1]);
    let transportCardCount = Number(input[2]);
    let museumTicketCount = Number(input[3]);

    let sleepNightPrice = 20;
    let transportCardPrice = 1.60;
    let museumPrice = 6;


    let costPerPerson = (sleepCount * sleepNightPrice) + (transportCardCount * transportCardPrice) + (museumTicketCount * museumPrice);

    
    let totalCost = costPerPerson * peopleCount;

   
    let totalWithUnexpected = totalCost + (totalCost * 0.25);

    console.log(totalWithUnexpected.toFixed(2));
}
excursion(["20",
"14",
"30",
"6"])
;
