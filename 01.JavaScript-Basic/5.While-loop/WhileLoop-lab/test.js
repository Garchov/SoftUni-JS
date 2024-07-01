function test(input) {
  let expectedAmount = Number(input[0]);

  let avCS = 0; // средно плащане в кеш на човек
  let avCC = 0; // средно плащане с карта на човек
  let totalCard = 0;
  let totalCash = 0;

  let i = 1;
  let command = input[i];

  while (command !== "End" && command !== expectedAmount) {
    let transaction = Number(command);

    if (command === "End") {
      console.log("Failed to collect required money for charity.");
      break;
    }

    if (transaction > 100 || totalCash + transaction > expectedAmount) {
      console.log("Error in transaction!");
    } else if (transaction <= 10 || totalCard + transaction > expectedAmount) {
      console.log("Error in transaction!");
    } else if (totalCash + transaction <= expectedAmount) {
      totalCash += transaction;
      console.log("Product sold!");
    } else if (totalCard + transaction <= expectedAmount) {
      totalCard += transaction;
      console.log("Product sold!");
    }
    if (totalCash + totalCard >= expectedAmount) {
      let averageCash = totalCash / 2;
      let averageCard = totalCard / 2;
      console.log(`Average CS: ${averageCash.toFixed(2)}`);
      console.log(`Average CC: ${averageCard.toFixed(2)}`);

      i++;
      command = input[i];
    }
  }
}
test(["500", "120", "8", "63", "256", "78", "317"]);

/*
На благотворително събитие плащанията за закупените продукти винаги се редуват: плащане в брой и плащане с карта. Установени са следните правила за заплащане:
•	Ако продуктът надвишава 100лв., за него не може да се плати в брой
•	Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта
Програмата приключва или след като получим команда "End" или след като средствата бъдат събрани.
*/
