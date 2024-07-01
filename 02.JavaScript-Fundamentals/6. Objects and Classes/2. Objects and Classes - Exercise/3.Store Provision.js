// function storeProvision(stock, outOfstock) {
//   let store = {};
//   for (let i = 0; i < stock.length; i += 2) {
//     let product = stock[i];
//     let quantity = Number(stock[i + 1]);
//     store[product] = quantity;
//   }
//   for (let i = 0; i < outOfstock.length; i += 2) {
//     let product = outOfstock[i];
//     let quantity = Number(outOfstock[i + 1]);

//     if (store.hasOwnProperty(product)) {
//       store[product] += quantity;
//     } else {
//       store[product] = quantity;
//     }
//   }
//   for (let key in store) {
//     console.log(`${key} -> ${store[key]}`);
//   }
// }
// storeProvision(
//   ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
//   ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
// );

function storeProvision(stock, outOfstock) {
  let products = [];
  for (let i = 0; i < stock.length; i += 2) {
    let product = stock[i];
    let quantity = Number(stock[i + 1]);

    let productObj = { name: product, qty: quantity };
    products.push(productObj);
  }
  for (let i = 0; i < outOfstock.length; i += 2) {
    let product = outOfstock[i];
    let quantity = Number(outOfstock[i + 1]);

    let productFound = products.find((i) => i.name === product);
    if (productFound) {
      productFound.qty += quantity;
    } else {
      let productObj = { name: product, qty: quantity };
      products.push(productObj);
    }
  }
  for (let productObj of products) {
    console.log(`${productObj.name} -> ${productObj.qty}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

// function storeProvisioning(array, array2) {
//   const inventory = {};
//   class Provissioning {
//     constructor(product, qty) {
//       this.product = product;
//       this.qty = qty;
//     }

//     getProduct() {
//       console.log(`${this.product} -> ${this.qty}`);
//     }
//   }

//   for (let i = 0; i < array.length; i += 2) {
//     const product = array[i];
//     const qty = Number(array[i + 1]);

//     inventory[product] = new Provissioning(product, qty);
//   }

//   for (let i = 0; i < array2.length; i += 2) {
//     const product = array2[i];
//     const qty = Number(array2[i + 1]);

//     if (!inventory.hasOwnProperty(product)) {
//       inventory[product] = new Provissioning(product, 0);
//     }

//     inventory[product].qty += qty;
//   }

//   for (const product in inventory) {
//     const { getProduct } = inventory[product];
//     getProduct.call(inventory[product]);
//   }
// }

// storeProvisioning(
//   ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
//   ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
// );