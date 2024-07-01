function listProducts(products) {
  let sortedProducts = products.slice().sort();

  for (let i = 0; i < sortedProducts.length; i++) {
    console.log(`${i + 1}.${sortedProducts[i]}`);
  }
}
listProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
listProducts(["Watermelon", "Banana", "Apples"]);
