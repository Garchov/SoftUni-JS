function tradeComissions(input) {
  let city = input[0];
  let sales = Number(input[1]);

  let commission = 0;

  if (sales >= 0) {
    switch (city) {
      case "Sofia":
        if (sales <= 500) {
          commission = 0.05 * sales;
        } else if (sales <= 1000) {
          commission = 0.07 * sales;
        } else if (sales <= 10000) {
          commission = 0.08 * sales;
        } else {
          commission = 0.12 * sales;
        }
        break;
      case "Varna":
        if (sales <= 500) {
          commission = 0.045 * sales;
        } else if (sales <= 1000) {
          commission = 0.075 * sales;
        } else if (sales <= 10000) {
          commission = 0.1 * sales;
        } else {
          commission = 0.13 * sales;
        }
        break;
      case "Plovdiv":
        if (sales <= 500) {
          commission = 0.055 * sales;
        } else if (sales <= 1000) {
          commission = 0.08 * sales;
        } else if (sales <= 10000) {
          commission = 0.12 * sales;
        } else {
          commission = 0.145 * sales;
        }
        break;
      default:
        console.log("error");
        return;
    }

    console.log(commission.toFixed(2));
  } else {
    console.log("error");
  }
}

tradeComissions(["Kaspichan", "-50"]);
