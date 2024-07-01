

function depositCalculator2 (input) {
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annulInterestPercent = Number(input[2]);
    let annualInterestDecimal = annulInterestPercent / 100;
    let sum = depositSum + depositPeriod * ((depositSum * annulInterestPercent) /12);

console.log(sum);
}

depositCalculator2 ["2350",
"6 ",
"7 "]

