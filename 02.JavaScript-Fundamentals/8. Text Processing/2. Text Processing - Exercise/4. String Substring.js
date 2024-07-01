// function stringSubstring(comparativeWord, text) {
//   let extractedWord = text.split(" ").shift().toLowerCase();

//   const comparies =
//     comparativeWord === extractedWord
//       ? console.log(comparativeWord)
//       : console.log(`${comparativeWord} not found!`);
// }
// stringSubstring("javascript", "JavaScript is the best programming language");
// stringSubstring("python", "JavaScript is the best programming language");  // 60/100
function stringSubstring(comparativeWord, text) {
  if (text.toLowerCase().split(" ").includes(comparativeWord)) {
    console.log(comparativeWord);
  } else {
    console.log(`${comparativeWord} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
