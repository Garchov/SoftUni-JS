function newHouse(input) {
  let flower = input[0];
  let flowerCount = Number(input[1]);
  let budjet = Number(input[2]);
  let price = 0;

  switch (flower) {
    case "Roses":
      price = 5 * flowerCount;

      if (flowerCount > 80) {
        price = price * 0.9;
      }
      break;

    case "Dahlias":
      price = flowerCount * 3.8;

      if (flowerCount > 90) {
        price = price * 0.85;
      }
      break;

    case "Tulips":
      price = flowerCount * 2.8;

      if (flowerCount > 80) {
        price = price - price * 0.15;
      }
      break;

    case "Narcissus":
      price = flowerCount * 3;

      if (flowerCount < 120) {
        price = price + price * 0.15;
      }
      break;

    case "Gladiolus":
      price = flowerCount * 2.5;

      if (flowerCount < 80) {
        price = price * 1.2;
      }
      break;
  }

  if (price <= budjet) {
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flower} and ${(
        budjet - price
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${Math.abs(budjet - price).toFixed(
        2
      )} leva more.`
    );
  }
}
newHouse(["Tulips", "88", "260"]);

/*
Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята,
 че Ви убеждава да напишете функция, която да изчисли колко  ще им струва,
  да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. Различните цветя са с различни цени. 
цвете	Роза	Далия	Лале	Нарцис	Гладиола
Цена на брой в лева	5	3.80	2.80	3	2.50
Съществуват следните отстъпки:
•	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
•	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
•	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
•	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
•	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
Функцията получава 3 аргумента:
•	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
•	Брой цветя - цяло число в интервала [10…1000]
•	Бюджет - цяло число в интервала [50…2500]
Да се отпечата на конзолата на един ред:
•	Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
•	Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
Сумата да бъде форматирана до втория знак след десетичната запетая.
*/
