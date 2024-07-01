function revealWords(wordStr, text) {
  let words = wordStr.split(", ");

  for (const word of words) {
    let startTemplate = "*".repeat(word.length);
    text = text.replace(startTemplate, word);
  }
  console.log(text);
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
    
);
