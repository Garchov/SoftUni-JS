function steamAccount(inputs) {
  // Инициализация на масива с игри
  let games = inputs[0].split(" ");

  // Обхождаме всяка команда
  for (let i = 1; i < inputs.length; i++) {
    let [command, argument] = inputs[i].split(" ");

    // Проверка за команда и изпълнение на съответната логика
    switch (command) {
      case "Install":
        if (!games.includes(argument)) {
          games.push(argument);
        }
        break;
      case "Uninstall":
        games = games.filter((existingGame) => existingGame !== argument);
        break;
      case "Update":
        games = games.filter((existingGame) => existingGame !== argument);
        games.push(argument);
        break;
      case "Expansion":
        let [game, expansion] = argument.split("-");
        let indexOfGame = games.indexOf(game);
        if (indexOfGame !== -1) {
          games.splice(indexOfGame + 1, 0, `${game}:${expansion}`);
        }
        break;
    }
  }

  console.log(games.join(" "));
}

steamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
steamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
