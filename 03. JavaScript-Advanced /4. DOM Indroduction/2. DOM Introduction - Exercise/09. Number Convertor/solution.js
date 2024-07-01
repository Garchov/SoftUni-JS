function solve() {
    const inputNumber = document.getElementById('input');
    const selectMenuTo = document.getElementById('selectMenuTo');
    const result = document.getElementById('result');
    const convertBtn = document.querySelector('#container button');

    // Populate the "To" select menu
    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    selectMenuTo.appendChild(binaryOption);

    const hexOption = document.createElement('option');
    hexOption.value = 'hexadecimal';
    hexOption.textContent = 'Hexadecimal';
    selectMenuTo.appendChild(hexOption);

    // Add event listener to the button
    convertBtn.addEventListener('click', function() {
        const decimalNumber = parseInt(inputNumber.value);
        if (isNaN(decimalNumber)) {
            result.value = 'Invalid input';
            return;
        }

        const conversionType = selectMenuTo.value;
        let convertedValue;

        if (conversionType === 'binary') {
            convertedValue = decimalNumber.toString(2);
        } else if (conversionType === 'hexadecimal') {
            convertedValue = decimalNumber.toString(16).toUpperCase();
        } else {
            result.value = 'Select a conversion type';
            return;
        }

        result.value = convertedValue;
    });
}