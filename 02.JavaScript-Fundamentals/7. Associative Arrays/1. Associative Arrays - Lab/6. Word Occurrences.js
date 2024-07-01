function wordOccurrences(array) {
  let wordOcc = {};
  for (const word of array) {
    if (!wordOcc.hasOwnProperty(word)) {
      wordOcc[word] = 1;
    } else {
      wordOcc[word] += 1;
    }
  }
  let sorted = Object.entries(wordOcc).sort((a, b) => b[1] - a[1]);

  for (const key of sorted) {
    console.log(`${key[0]} -> ${[key[1]]} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
