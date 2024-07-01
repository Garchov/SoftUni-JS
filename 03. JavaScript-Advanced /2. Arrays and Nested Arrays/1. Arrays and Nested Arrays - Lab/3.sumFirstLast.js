function sumFirstLast(input) {
  return input.reduce((a, b, index) => {
    if (index === 0 || index === input.length - 1) {
      return a + Number(b);
    }
    return a;
  }, 0);
}
console.log(sumFirstLast(["20", "30", "40"]));
