function dungDark(input) {
  let rooms = input[0].split("|");
  let health = 100;
  let coins = 0;
  let isFinished = false;

  for (let index = 0; index < rooms.length; index++) {
    let room = rooms[index].split(" ");

    if (room[0] === "potion") {
      let currHealth = Math.min(Number(room[1]), 100 - health);
      health += currHealth;
      console.log(`You healed for ${currHealth} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (room[0] === "chest") {
      let currCoins = Number(room[1]);
      coins += currCoins;
      console.log(`You found ${currCoins} coins.`);
    } else {
      let currMonster = room[0];
      let attackOfMonster = Number(room[1]);
      health -= attackOfMonster;

      if (health > 0) {
        console.log(`You slayed ${currMonster}.`);
      } else {
        console.log(`You died! Killed by ${currMonster}.`);
        console.log(`Best room: ${index + 1}`);
        isFinished = true;
        break;
      }
    }
  }

  if (!isFinished) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
