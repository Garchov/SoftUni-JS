// function modernTimesHashTag(text) {
//   let splitText = text.split(" ");
//   let tag = "#";
//   let hastags = [];
//   for (const iterator of splitText) {
//     if (iterator.includes("#")) {
//       if (iterator === tag) {
//         continue;
//       }

//       hastags.push(iterator);
//     }
//   }
//   for (const word of hastags) {
//     let result = word.slice(1);
//     let pattern = /[A-Za-z]+/;
//     if (pattern.test(result)){
//     console.log(result);
//   }
// }
// }

// modernTimesHashTag(
//   "Nowadays everyone uses # to tag a #special word in #socialMedia"
// );
// modernTimesHashTag(
//   "The symbol # is known #variously in English-speaking #regions as the #number sign"
// );
function modernTimesHashTag(text) {
  let splitText = text.split(" ");
  let hashtags = splitText.filter(
    (word) => word.startsWith("#") && word.length > 1
  );

  for (const word of hashtags) {
    let result = word.slice(1);
    let pattern = /\b[A-Za-z]+\b/;
    if (pattern.test(result)) {
      console.log(result);
    }
  }
}
modernTimesHashTag(
  "Nowadays everyone uses # to tag a #special111 word in #socialMedia"
);
modernTimesHashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
