function sumOfOddNumbers(n) {
    let sum = 0;
    let index = 1;
    let count = 0;

while (n > count) {

        if (index % 2 !== 0){   
            console.log( index);
            count++;
    sum += index;
    }
    
    index++;
}
console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)