function test(string1, symbol, string2) {
  //create variable for result

  //combine word char
  //--- read character one by one
  //--- if current character is '_' add char parameter to result
  //--- else add current character to result

  // compare result with match and print message

  let result = "";
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] == "_") {
      result += symbol;
    } else {
      result += string1[i];
    }
  }

  if (result == string2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
