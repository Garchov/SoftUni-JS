function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let qty = Number(input[2]);

  if (city === "Sofia") {
    if (product === "coffee") {
      sum = qty * 0.5;
    } else if (product === "water") {
      sum = qty * 0.8;
    } else if (product === "beer") {
      sum = qty * 1.2;
    } else if (product === "sweets") {
      sum = qty * 1.45;
    } else {
      sum = qty * 1.6;
    }
  } else if (city === "Plovdiv") {
    if (product === "coffee") {
      sum = qty * 0.4;
    } else if (product === "water") {
      sum = qty * 0.7;
    } else if (product === "beer") {
      sum = qty * 1.15;
    } else if (product === "sweets") {
      sum = qty * 1.3;
    } else {
      sum = qty * 1.5;
    }
  } else if (city === "Varna") {
    if (product === "coffee") {
      sum = qty * 0.45;
    } else if (product === "water") {
      sum = qty * 0.7;
    } else if (product === "beer") {
      sum = qty * 1.1;
    } else if (product === "sweets") {
      sum = qty * 1.35;
    } else {
      sum = qty * 1.55;
    }
  }
  console.log(sum);
}
smallShop(["coffee", "Varna", "2"]);
