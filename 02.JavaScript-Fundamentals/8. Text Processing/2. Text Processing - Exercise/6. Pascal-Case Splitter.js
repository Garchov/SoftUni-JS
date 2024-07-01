function pascalCaseSplitter(str) {
  let words = [];
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && i !== 0) {
      words.push(currentWord);
      currentWord = str[i];
    } else {
      currentWord += str[i];
    }
  }

  // Add the last word
  words.push(currentWord);

  console.log(words.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
pascalCaseSplitter("ThisIsSoAnnoyingToDo");
