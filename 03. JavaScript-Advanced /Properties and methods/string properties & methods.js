//? JavaScript - useful string properties & methods

//? 1. String.prototype.length
console.log("Hello".length); // 5   characters

//? 2. String.prototype.toUpperCase()&.toUpperCase()
console.log("hello".toUpperCase()); // HELLO    uppercase
console.log("HELLO".toLowerCase()); // hello    lowercase

//? 3. String.prototype.charAt()
console.log("hello".charAt(0)); // h
console.log("hello".charAt(4)); // o
console.log("hello".charAt(5)); // empty string (returns empty string)

//? 4. String.prototype.charCodeAt()
console.log("hello".charCodeAt(0)); // 104
console.log("hello".charCodeAt(1)); // 101

//? 5. String.prototype.indexOf()
console.log("hello".indexOf("e")); // 1
console.log("hello".indexOf("x")); // -1

//? 6. String.prototype.trim()
console.log("   hello   ".trim()); // hello

//? 7. String.prototype.split()
console.log("hello".split("")); // ["h", "e", "l", "l", "o"]

//? 8. String.prototype.slice()
console.log("hello".slice(0, 3)); // hel

//? 9. String.prototype.substring()
console.log("hello".substring(0, 3)); // hel

//? 10. String.prototype.repeat()
console.log("hello".repeat(3)); // hellohellohello

//? 11. String.prototype.replace()
console.log("hello".replace("l", "x")); // hexo

//? 12. String.prototype.includes()
console.log("hello".includes("l")); // true

//? 13. String.prototype.startsWith()
console.log("hello".startsWith("h")); // true

//? 14. String.prototype.endsWith()
console.log("hello".endsWith("o")); // true

//? 15. String.prototype.match()
console.log("hello".match(/l/g)); // ["l", "l", "l"]

//? 16. String.prototype.search()
console.log("hello".search("l")); // 2

//? 17. String.prototype.concat()
console.log("hello".concat(" ", "world")); // hello world

//? 18. String.prototype.padStart()
console.log("hello".padStart(8, "x")); // xxxhello

//? 19. String.prototype.padEnd()
console.log("hello".padEnd(8, "x")); // helloxxx

//? 20. String.prototype.split()
console.log("hello".split("")); // ["h", "e", "l", "l", "o"]
