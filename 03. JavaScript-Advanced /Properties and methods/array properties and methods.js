//? JavaScript - useful array properties & methods


//? 1. Array.isArray()
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false      object is not an array

//? 2. Array.from()
console.log(Array.from("hello")); // ["h", "e", "l", "l", "o"]

//? 3. Array.of()
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(1)); // [1]


//? 4. Array.prototype.concat()
console.log([1, 2, 3].concat([4, 5, 6])); // [1, 2, 3, 4, 5, 6]

//? 5. Array.prototype.copyWithin()
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]  //! start from 0  copy from index 3 to index 4

//? 6. Array.prototype.entries()
console.log([...[1, 2, 3].entries()]); // [[0, 1], [1, 2], [2, 3]]

//? 7. Array.prototype.every()
console.log([1, 2, 3].every((x) => x > 0)); // true
console.log([1, 2, 3].every((x) => x > 1)); // false    

//? 8. Array.prototype.fill()
console.log([1, 2, 3].fill(0)); // [0, 0, 0]

//? 9. Array.prototype.filter()
console.log([1, 2, 3].filter((x) => x > 1)); // [2, 3]

//? 10. Array.prototype.find()
console.log([1, 2, 3].find((x) => x > 1)); // 2

//? 11. Array.prototype.findIndex()
console.log([1, 2, 3].findIndex((x) => x > 1)); // 1      index of 2    

//? 12. Array.prototype.flat()
console.log([1, 2, [3, 4]].flat()); // [1, 2, 3, 4]

//? 13. Array.prototype.flatMap()
console.log([1, 2, [3, 4]].flatMap((x) => x + 1)); // [2, 3, 3, 4]

//? 14. Array.prototype.forEach()
console.log([1, 2, 3].forEach((x) => x + 1)); // [2, 3, 4]

//? 15. Array.prototype.includes()
console.log([1, 2, 3].includes(2)); // true

//? 16. Array.prototype.indexOf()
console.log([1, 2, 3].indexOf(2)); // 1

//? 17. Array.prototype.join()
console.log([1, 2, 3].join("-")); // 1-2-3

//? 18. Array.prototype.keys()
console.log([...[1, 2, 3].keys()]); // [0, 1, 2]

//? 19. Array.prototype.lastIndexOf()
console.log([1, 2, 3].lastIndexOf(2)); // 2

//? 20. Array.prototype.map()
console.log([1, 2, 3].map((x) => x + 1)); // [2, 3, 4]

//? 21. Array.prototype.pop()
console.log([1, 2, 3].pop()); // 3

//? 22. Array.prototype.push()
console.log([1, 2, 3].push(4)); // 4

//? 23. Array.prototype.reduce()
console.log([1, 2, 3].reduce((a, b) => a + b)); // 6

//? 24. Array.prototype.reduceRight()
console.log([1, 2, 3].reduceRight((a, b) => a + b)); // 6

//? 25. Array.prototype.reverse()
console.log([1, 2, 3].reverse()); // [3, 2, 1]

//? 26. Array.prototype.shift()
console.log([1, 2, 3].shift()); // 1

//? 27. Array.prototype.slice()
console.log([1, 2, 3].slice(0, 2)); // [1, 2]

//? 28. Array.prototype.some()
console.log([1, 2, 3].some((x) => x > 1)); // true

//? 29. Array.prototype.sort()
console.log([1, 2, 3].sort()); // [1, 2, 3]

//? 30. Array.prototype.splice()
console.log([1, 2, 3].splice(0, 2)); // [1, 2]

//? 31. Array.prototype.unshift()
console.log([1, 2, 3].unshift(0)); // 3

//? 32. Array.prototype.values()
console.log([...[1, 2, 3].values()]); // [1, 2, 3]


