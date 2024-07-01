function repeatStrings(string, count) {
    let result = (string, count) => string.repeat(count);
    return result(string, count);
    
  /* let result = string.repeat(count);
  console.log(result); */
  
  } 
  
  console.log(repeatStrings("abc", 3));
  console.log(repeatStrings("String", 2));