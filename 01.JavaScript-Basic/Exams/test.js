function calculateGroupExpenses(input) {
    let groupSize = Number(input[0]);
    let nights = Number(input[1]);
    let cards = Number(input[2]);
    let museums = Number(input[3]);

    let nightCost = nights * 20;
    let cardCost = cards * 1.60;
    let museumCost = museums * 6;

    let totalCostPerPerson = nightCost + cardCost + museumCost;
    let totalCostForGroup = totalCostPerPerson * groupSize;

    let unexpectedExpenses = totalCostForGroup * 0.25;
    let totalAmount = totalCostForGroup + unexpectedExpenses;

    return totalAmount.toFixed(2);
}
calculateGroupExpenses(["131",
"9",
"33",
"46"]);
