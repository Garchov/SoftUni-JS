// function countStringOccurrences(word, searchedWord) {
//   let sentence = word.split(" ");
//   let count = 0;
//   for (let index = 0; index < word.length; index++) {
//     if (sentence[index] === searchedWord) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countStringOccurrences("This is a word and it also is a sentence", "is");
function countStringOccurrences(word, searchedWord) {
  let sentence = word.split(" ");
  let count = 0;
  sentence.forEach((element) => {
    if (element === searchedWord) {
      count++;
    }
  });
  console.log(count);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
