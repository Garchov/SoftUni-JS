// function storage(array) {
//   let storage = {};
//   for (const key of array) {
//     let [product, value] = key.split(" ");
//     value = Number(value);

//     if (!storage.hasOwnProperty(product)) {
//       storage[product] = value;
//     } else {
//       storage[product] += value;
//     }
//   }
//   for (let key in storage) {
//     console.log(`${key} -> ${storage[key]}`);
//   }
// }
// storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
// storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);


function storage(array) {
  let store = new Map();
  array.forEach((element) => {
    let [product, qty] = element.split(" ");
    let numberAsQty = Number(qty);
    if (!store.has(product)) {
      store.set(product, +numberAsQty);
    } else {
      let currentQty = store.get(product);
      let newQty = (currentQty += numberAsQty);
      store.set(product, newQty);
    }
  });

  for (const kvp of store) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);