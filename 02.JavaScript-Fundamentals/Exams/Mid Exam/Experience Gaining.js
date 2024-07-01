function experienceGaining(input) {
    const experienceNeeded = input[0];
    const battles = input[1];
    const experiencePerBattle = input.slice(2);

    let totalExperience = 0;
    let battleCount = 0;

    for (let i = 0; i < battles; i++) {
        battleCount++;
        let experience = experiencePerBattle[i];

       
        if (battleCount % 3 === 0) {
            experience *= 1.15;
        }
        if (battleCount % 5 === 0) {
            experience *= 0.9;
        }
        if (battleCount % 15 === 0) {
            experience *= 1.05;
        }

        totalExperience += experience;

        if (totalExperience >= experienceNeeded) {
            return `Player successfully collected his needed experience for ${battleCount} battles.`;
        }
    }

    const neededExperience = (experienceNeeded - totalExperience);
    if (neededExperience > 0) {
        return `Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`;
    } else {
        return `Player successfully collected his needed experience for ${battleCount} battles.`;
    }
}


console.log(experienceGaining(([500,
    5,
    50,
    100,
    200,
    100,
    30])
));
