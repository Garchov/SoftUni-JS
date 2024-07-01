// function censoredWord(text, censore) {
//   let sentence = text.split(" ");
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === censore) {
//       sentence[i] = "*".repeat(sentence[i].length);
//     }
//   }
//   console.log(sentence.join(" "));
// }
// censoredWord("A small sentence with some words", "small");
function censoredWord(text, word) {
    while (text.includes(word)) {
    text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
    }

censoredWord("A small sentence with some words", "small");
