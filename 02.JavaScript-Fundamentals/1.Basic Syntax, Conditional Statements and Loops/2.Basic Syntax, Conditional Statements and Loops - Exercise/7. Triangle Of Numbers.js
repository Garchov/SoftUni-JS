function printTriangle(n) {
 /* for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }

    console.log(row.trim());
  }
}
*/
for (let currentRow=1; currentRow <=n; currentRow++) {

  console.log(`${currentRow} `.repeat(currentRow));

}
}
// Examples
printTriangle(3);
console.log(); // Empty line for separation
printTriangle(5);
console.log(); // Empty line for separation
printTriangle(6);
