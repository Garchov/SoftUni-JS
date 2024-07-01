function replaceRepeatingChars(chars) {
  let letter = chars.split("");
  let newCharsLine = [];
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] !== letter[i - 1]) {
      newCharsLine.push(letter[i]);
    }
  }
  console.log(newCharsLine.join(""));
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa"); // abcdedsa
