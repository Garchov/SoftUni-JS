function weatherForeCastPart2(input) {
    let degrees = Number(input[0]);

    if (degrees >= 26.00 && degrees <= 35.00) {
        console.log("Hot");
    } else if (degrees >= 20.1 && degrees <= 25.9) {
        console.log("Warm");
    } else if (degrees >= 15.00 && degrees <= 20.00) {
        console.log("Mild");
    } else if (degrees >= 12.00 && degrees <= 14.9) {
        console.log("Cool");
    } else if (degrees >= 5.00 && degrees <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}


weatherForeCastPart2(["26.00 - 35.00", "20.1 - 25.9", "15.00 - 20.00", "12.00 - 14.9", "5.00 - 11.9"]);