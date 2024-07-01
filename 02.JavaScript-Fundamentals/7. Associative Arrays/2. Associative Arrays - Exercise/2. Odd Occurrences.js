function oddOccurrences(data) {
    let result = {};
    let words = data.split(" ");
  
    words.forEach((word) => {
      word = word.toLowerCase();
      !result.hasOwnProperty(word) ? (result[word] = 1) : result[word]++;
    });
  
    let filtered = Object.entries(result).filter(([key, value]) => {
      return value % 2 !== 0;
    });
  
    let buff = [];
  
    filtered.forEach((key) => {
      buff.push(key.shift());
    });
    console.log(buff.join(" "));
  }
  oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");