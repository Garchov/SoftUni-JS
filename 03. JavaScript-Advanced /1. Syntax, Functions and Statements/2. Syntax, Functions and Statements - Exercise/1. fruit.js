function fruit(fruit, weight,pricePerKilos) {

  console.log(
    `I need $${((weight / 1000) * pricePerKilos).toFixed(2)} to buy ${(
      weight / 1000
    ).toFixed(2)} kilograms ${fruit}.`
  );
}
fruit("orange", 2500, 1.8);
