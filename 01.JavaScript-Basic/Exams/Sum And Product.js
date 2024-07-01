function findCombination(input) {
    let n = parseInt(input[0]);
    let numberReached = false;
    let count = 0;

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let numSum = a + b + c + d;
                    let numMult = a * b * c * d;

                    if (numSum === numMult && n % 10 === 5) {
                        count++;
                        console.log(`${a}${b}${c}${d}`);
                        numberReached = true;
                        break;
                    } else if (Math.floor(numMult / numSum) === 3 && n % 3 === 0) {
                        count++;
                        console.log(`${d}${c}${b}${a}`);
                        numberReached = true;
                        break;
                    }
                }

                if (numberReached) {
                    break;
                }
            }

            if (numberReached) {
                break;
            }
        }

        if (numberReached) {
            break;
        }
    }

    if (count === 0) {
        console.log("Nothing found");
    }
}
// Примери за използване:
findCombination(["123"]);  // Очакван изход: 8191
findCombination(["145"]);  // Очакван изход: 1412
findCombination(["214"]);  // Очакван изход: Nothing found