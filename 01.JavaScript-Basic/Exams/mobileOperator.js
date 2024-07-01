function mobileOperator(input) {
    
    let contractTerm = input[0];
    let contractType = input[1];
    let mobileInternet = input[2];
    let months = Number(input[3]);

    
    let contractPrice = 0;
    let internetPrice = 0;

    
    switch (contractType) {
        case 'Small':
            contractPrice = (contractTerm === 'one') ? 9.98 : 8.58;
            break;
        case 'Middle':
            contractPrice = (contractTerm === 'one') ? 18.99 : 17.09;
            break;
        case 'Large':
            contractPrice = (contractTerm === 'one') ? 25.98 : 23.59;
            break;
        case 'ExtraLarge':
            contractPrice = (contractTerm === 'one') ? 35.99 : 31.79;
            break;
    }

    
    if (mobileInternet === 'yes') {
        if (contractPrice <= 10) {
            internetPrice = 5.50;
        } else if (contractPrice <= 30) {
            internetPrice = 4.35;
        } else {
            internetPrice = 3.85;
        }
    }

    
    let totalMonthlyPrice = contractPrice + internetPrice;

   
    if (contractTerm === 'two') {
        totalMonthlyPrice *= 0.9625; 
    }

    
    let totalPrice = totalMonthlyPrice * months;

    console.log(`${totalPrice.toFixed(2)} lv.`);
}
mobileOperator(['two',
    'Large',
    'no',
    '10'
]);

