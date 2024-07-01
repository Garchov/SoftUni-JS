// function printCharacters(text){
//     let words=text.split('');
// words.forEach(element => {
//   console.log(element);  
// });
// }
// printCharacters('AWord')
function printCharacters(text){
    let chars=text.split('');
for (const char of chars) {
    console.log(char);
}
}
printCharacters('AWord')