function square(num) {
    return num * num;
  }
  //Function expression
  function doubleAndSquare(num) {
    let doubled = num * 2;
    return square(doubled);
  }
  
  // Извикваме функцията doubleAndSquare с аргумент 4
  let result = doubleAndSquare(4);
  // Резултатът от doubleAndSquare(4) е square(4 * 2)
  // Следователно, резултатът е square(8), където num в square става 8
  // Следователно, square(8) е 8 * 8 = 64
  console.log(result);