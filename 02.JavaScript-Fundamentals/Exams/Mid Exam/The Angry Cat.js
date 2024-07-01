/* function calculateDamage(priceRatings, entryPoint, itemType) {
  let leftSum = 0;
  let rightSum = 0;

  entryPoint = Number(entryPoint);

  for (let i = entryPoint - 1; i >= 0; i--) {
    if (
      (itemType === "cheap" && priceRatings[i] < priceRatings[entryPoint]) ||
      (itemType === "expensive" && priceRatings[i] >= priceRatings[entryPoint])
    ) {
      leftSum += priceRatings[i];
    } else {
      break;
    }
  }

  for (let i = entryPoint + 1; i < priceRatings.length; i++) {
    if (
      (itemType === "cheap" && priceRatings[i] < priceRatings[entryPoint]) ||
      (itemType === "expensive" && priceRatings[i] >= priceRatings[entryPoint])
    ) {
      rightSum += priceRatings[i];
    } else {
      break;
    }
  }

  let position = leftSum >= rightSum ? "Left" : "Right";
  let damage = Math.max(leftSum, rightSum);

  console.log(`${position} - ${damage}`);
}

calculateDamage([1, 5, 1], 1, "cheap");
calculateDamage([5, 10, 12, 5, 4, 20], 3, "cheap");
calculateDamage([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");

задачата дава 90 от 100
 */

function calculateDamage(priceRatings, entryPoint, itemType) {
  let leftDamage = 0;
  let rightDamage = 0;
  let result = '';

  if (itemType === "cheap") {
      let entryPrice = priceRatings[entryPoint];
      for (let i = 0; i < entryPoint; i++) {
          if (priceRatings[i] < entryPrice) {
              leftDamage += priceRatings[i];
          }
      }
      for (let i = entryPoint + 1; i < priceRatings.length; i++) {
          if (priceRatings[i] < entryPrice) {
              rightDamage += priceRatings[i];
          }
      }
  } else if (itemType === "expensive") {
      let entryPrice = priceRatings[entryPoint];
      for (let i = 0; i < entryPoint; i++) {
          if (priceRatings[i] >= entryPrice) {
              leftDamage += priceRatings[i];
          }
      }
      for (let i = entryPoint + 1; i < priceRatings.length; i++) {
          if (priceRatings[i] >= entryPrice) {
              rightDamage += priceRatings[i];
          }
      }
  }

  if (leftDamage > rightDamage || (leftDamage === rightDamage && entryPoint !== 0)) {
      result = `Left - ${leftDamage}`;
  } else if (rightDamage > leftDamage || (leftDamage === rightDamage && entryPoint === 0)) {
      result = `Right - ${rightDamage}`;
  }

  return result;
}

console.log(calculateDamage([1, 5, 1], 1, "cheap")); // Output: Left - 1
console.log(calculateDamage([5, 10, 12, 5, 4, 20], 3, "cheap")); // Output: Right - 4
console.log(calculateDamage([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")); // Output: Left - 20

// дава 100 / 100
