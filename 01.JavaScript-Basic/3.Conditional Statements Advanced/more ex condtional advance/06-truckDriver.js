function truckDriver(input) {
  let season = input[0];
  let monthKм = Number(input[1]);
  let vat = 0.9;
  let fuel = 0;
  let price = 0;
  let seosonQty = 4;

  if ((season === "Spring" || season === "Autumn") && monthKм < 5000) {
    fuel = 0.75;
  } else if (season === "Summer" && monthKм < 5000) {
    fuel = 0.95;
  } else if (season === "Winter" && monthKм < 5000) {
    fuel = 1.05;
  } else if (
    (season === "Spring" || season === "Autumn") &&
    monthKм >= 5000 &&
    monthKм < 10000
  ) {
    fuel = 0.95;
  } else if (season === "Summer" && monthKм >= 5000 && monthKм < 10000) {
    fuel = 1.1;
  } else if (season === "Winter" && monthKм >= 5000 && monthKм < 10000) {
    fuel = 1.25;
  } else if (monthKм >= 10000 && monthKм <= 20000) {
    fuel = 1.45;
  }

  price = (monthKм * fuel * vat * seosonQty).toFixed(2);

  console.log(price);
}

truckDriver(["Summer", "3455"]);
