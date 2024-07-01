/*function clock() {

    for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
            let result = x * y;
            console.log(`${x} * ${y} = ${result}`);
        }
    }
}
clock();

*/

function clock() {
  let x = 10;
  while (x >= 1) {
    y = 10;
    while (y >= 1) {
      let result = x * y;
      console.log(`${x} * ${y} = ${result}`);
      y--;
    }
    x--;
  }
}

clock();
