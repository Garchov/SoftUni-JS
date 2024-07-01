function calculateVacationPrice(peopleCount, groupType, dayOfWeek) {
  // Define the prices based on the table
  const prices = {
    Friday: { Students: 8.45, Business: 10.9, Regular: 15 },
    Saturday: { Students: 9.8, Business: 15.6, Regular: 20 },
    Sunday: { Students: 10.46, Business: 16, Regular: 22.5 },
  };

  // Get the base price for the specific group and day
  let basePrice = prices[dayOfWeek][groupType];

  // Calculate the total price without discounts
  let totalPrice = peopleCount * basePrice;

  // Apply discounts in the specified order
  if (groupType === "Students" && peopleCount >= 30) {
    totalPrice *= 0.85; // 15% discount for Students with 30 or more people
  } else if (groupType === "Business" && peopleCount >= 100) {
    totalPrice -= 10 * basePrice; // 10 people stay for free for Business with 100 or more people
  } else if (
    groupType === "Regular" &&
    peopleCount >= 10 &&
    peopleCount <= 20
  ) {
    totalPrice *= 0.95; // 5% discount for Regular with 10 to 20 people
  }

  // Format the total price to two decimal points
  totalPrice = totalPrice.toFixed(2);

  // Print the result
  console.log(`Total price: ${totalPrice}`);
}

// Examples
calculateVacationPrice(30, "Students", "Sunday");
calculateVacationPrice(40, "Regular", "Saturday");
calculateVacationPrice(30, "Students", "Sunday");
