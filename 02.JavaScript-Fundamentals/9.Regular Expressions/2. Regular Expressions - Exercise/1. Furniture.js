function furniture(data) {
  let pattern = />>(?<furniture>[A-z]+)<<(?<price>[0-9.]+)\!(?<qty>[0-9]+)/;
  let price = 0;

  console.log(`Bought furniture:`);

  for (const line of data) {
    if (line === "Purchase") {
      break;
    }
    if (pattern.test(line)) {
      let product = pattern.exec(line);
      let currentPrice =
        Number(product.groups.price) * Number(product.groups.qty);
      price += currentPrice;
      console.log(`${product.groups.furniture}`);
    }
  }

  console.log(`Total money spend: ${price.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
