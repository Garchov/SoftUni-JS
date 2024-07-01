function computerStore(data) {
  let totalPrice = 0;
  let isSpecial = false;

  for (const price of data) {
    if (price === "special") {
      isSpecial = true;
      break;
    } else if (price === "regular") {
      break;
    }
    if (price < 0) {
      console.log("Invalid price!");
    } else {
      totalPrice += Number(price);
    }
  }
  let taxes = totalPrice * 0.2;
  let priceWithoutTaxes = totalPrice;
  totalPrice *= 1.2;

  if (isSpecial) {
    totalPrice *= 0.9;
  }
  totalPrice > 0
    ? console.log(
        `Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTaxes.toFixed(
          2
        )}$\nTaxes: ${taxes.toFixed(
          2
        )}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`
      )
    : console.log("Invalid order!");
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore(["1023","15","-20","-5.50","450","20","17.66","19.30","regular"]);
computerStore(["regular"]);
