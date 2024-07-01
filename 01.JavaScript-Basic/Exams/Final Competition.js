function finalCompetition(input) {
    let dancersCount = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let location = input[3];

    let prizePerDancer = 0;

    if (location === "Bulgaria") {
        prizePerDancer = points * dancersCount;
    } else if (location === "Abroad") {
        prizePerDancer = (points * dancersCount) + 0.5 * (points * dancersCount);
    }

    if (location === "Bulgaria") {
        if (season === "summer") {
            prizePerDancer *= 0.95;
        } else if (season === "winter") {
            prizePerDancer *= 0.92;
        }
    } else if (location === "Abroad") {
        if (season === "summer") {
            prizePerDancer *= 0.90;
        } else if (season === "winter") {
            prizePerDancer *= 0.85;
        }
    }

    let charityAmount = 0.75 * prizePerDancer;

    let remainingAmount = prizePerDancer - charityAmount;

    let moneyPerDancer = remainingAmount / dancersCount;

    console.log(`Charity - ${charityAmount.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}
finalCompetition(["25",
    "98",
    "winter",
    "Bulgaria"])


