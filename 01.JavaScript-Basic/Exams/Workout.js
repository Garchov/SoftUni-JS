function workout(input) {
    let days = Number(input[0]);
    let kmFirstDay = Number(input[1]);
    let totalKm = kmFirstDay;

    for (let day = 1; day <= days; day++) {
        let percentageIncrease = Number(input[day + 1]);
        kmFirstDay += (percentageIncrease / 100) * kmFirstDay;
        totalKm += kmFirstDay;
    }

    let difference = Math.abs(totalKm - 1000);

    if (totalKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(difference)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(difference)} more kilometers`);
    }
}

// Примерни входни данни:
workout(["5", "30", "10", "15", "20", "5", "12"]);  // Очакван отговор: Sorry Mrs. Ivanova, you need to run 658 more kilometers

workout(["4", "100", "30", "50", "60", "80"]);  // Очакван отговор: You've done a great job running 1339 more kilometers!
