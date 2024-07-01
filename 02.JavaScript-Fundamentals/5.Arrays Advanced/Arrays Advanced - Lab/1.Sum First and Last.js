const sumFirstAndLastEl = (el) => {
  let sum = Number(el[0]) + Number(el[el.length - 1]);
  return sum;
};

console.log(sumFirstAndLastEl(["20", "30", "40"]));
console.log(sumFirstAndLastEl(['5', '10']));
/* function sumFirstAndLast(array) {
    let sum = Number(array[0]) + Number(array[array.length - 1]);
    console.log(sum); 
}
sumFirstAndLast(["20", "30", "40"]) */