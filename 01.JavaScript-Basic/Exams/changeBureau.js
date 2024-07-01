let bitcoins = (input[0]);
let yuan = (input[1]);
let commission =(input[2]);
function changeBureau(input) {
    // Currency rates
    const bitcoinToLev = 1168;
    const yuanToDollar = 0.15;
    const dollarToLev = 1.76;
    const euroToLev = 1.95;
    // Convert amounts to BGN
    let bitcoinsInLev = bitcoins * bitcoinToLev;
    let yuanToDollarAmount = yuan * yuanToDollar;
    let dollarToLevAmount = yuanToDollarAmount * dollarToLev;
    // Calculate total amount in BGN
    let totalAmountInLev = bitcoinsInLev + dollarToLevAmount;
    // Calculate commission
    let commissionAmount = (commission / 100) * totalAmountInLev;
    // Calculate final amount in BGN after commission
    let finalAmountInLev = totalAmountInLev - commissionAmount;
    // Convert to Euro
    let finalAmountInEuro = finalAmountInLev / euroToLev;
    // Print the result with two decimal places
    console.log(finalAmountInEuro.toFixed(2));
}
changeBureau(['1', '5', '5']);