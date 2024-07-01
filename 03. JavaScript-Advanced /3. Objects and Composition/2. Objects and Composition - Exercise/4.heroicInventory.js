function heroicInventory(input) {
  let heroes = [];

  for (let data of input) {
    let [name, level, items] = data.split(" / ");

    if (name && level) {
      level = Number(level);

      items = items ? items.split(", ") : [];

      let hero = { name, level, items };
      heroes.push(hero);
    }
  }

  console.log(JSON.stringify(heroes));
}

heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
