function orders(product, qty) {
  let price = 0;
  if (product === "coffee") {
    price = 1.5;
  } else if (product === "water") {
    price = 1.0;
  } else if (product === "coke") {
    price = 1.4;
  } else if (product === "snacks") {
    price = 2.0;
  }
  let total = price * qty;
  return total.toFixed(2);
}
console.log(orders("water", 5));
console.log(orders("coffee", 2));
