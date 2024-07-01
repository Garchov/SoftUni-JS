function nonDecreasingSubset(input) {
  let result = [input[0]];

  for (let i = 1; i < input.length; i++) {
    // Сравняваме текущия елемент с предходния и с текущия най-голям елемент в резултата
    if ( input[i] >= input[i - 1]) {
      result.push(input[i]); // Ако е по-голям или равен, добавяме го в резултата
    }
  }
  console.log(result.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]); //1 3 8 10 12 24
console.log("...");
nonDecreasingSubset([1, 2, 3, 4]);
console.log("...");
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
