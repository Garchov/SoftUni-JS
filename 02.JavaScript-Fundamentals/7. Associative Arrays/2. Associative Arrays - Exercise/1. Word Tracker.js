function wordTracker(arr) {
  let wordsTracker = {};
  let searchedWords = arr.shift().split(" ");

  for (const word of searchedWords) {
    wordsTracker[word] = 0;
  }
  for (const word of arr) {
    if (word in wordsTracker) {
      wordsTracker[word] += 1;
    }
  }

  let sorted = Object.entries(wordsTracker).sort((a, b) => b[1] - a[1]);
  for (const [word, qty] of sorted) {
    console.log(`${word} - ${qty}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
