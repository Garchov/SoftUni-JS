/* function characterInRange(char1, char2) {
  const start = char1.charCodeAt(0);
  const end = char2.charCodeAt(0);

  let result = "";

  for (
    let asciiCode = Math.min(start, end) + 1;
    asciiCode < Math.max(start, end);
    asciiCode++
  ) {
    result += String.fromCharCode(asciiCode) + " ";
  }

  console.log(result.trim()); // Log the result after trimming the trailing space
}

characterInRange('a','d')
characterInRange('#',':')
characterInRange("C", "#"); */



function characterInRange(char1, char2) {
    let start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let charInRange = [];
    for (let i = start + 1; i < end; i++) {
      charInRange.push(String.fromCharCode(i));
    }
  
    console.log(charInRange.join(" "));
  }
  characterInRange("a", "d");
  characterInRange("#", ":");
  characterInRange("C", "#");