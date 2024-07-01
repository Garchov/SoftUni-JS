
    function perfectNumber(input) {
        let isPerfect = numberToArray(input);
        console.log(isPerfect ? 'We have a perfect number!' : "It's not so perfect.");
        
        function numberToArray(number){
            let sum = 0;
            for(let i = 1; i < number; i++) {
                if(number % i === 0) {
                    sum += i;
                }
            }
            return sum === number;
        }
    }
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
