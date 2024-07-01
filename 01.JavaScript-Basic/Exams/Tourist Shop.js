function touristShop(input) {
  let budget = Number(input[0]);

  let product = "";
  let price = 0;
  let totalPrice = 0;
  let productCount = 0;
  let index = 1;
  let command = input[index];
  index++;

  while (command !== "Stop") {
    product = command;
    price = Number(input[index]);
    index++;

    if ((productCount + 1) % 3 === 0) {
      // Промоция: всеки трети продукт (след първия) е на половин цена
      price /= 2;
    }

    if (price > budget) {
      console.log(`You don't have enough money!`);
      console.log(`You need ${(price - budget).toFixed(2)} leva!`);
      return; // Връщаме се, за да не продължаваме изпълнението на цикъла след грешка.
    }

    budget -= price;
    totalPrice += price;
    productCount++;
    command = input[index];
    index++;
  }

  console.log(
    `You bought ${productCount} products for ${totalPrice.toFixed(2)} leva.`
  );
}

touristShop([
  "153.20",
  "Backpack",
  "25.20",
  "Shoes",
  "54",
  "Sunglasses",
  "30",
  "Stop",
]);

// Всеки трети продукт е на половин цена.
