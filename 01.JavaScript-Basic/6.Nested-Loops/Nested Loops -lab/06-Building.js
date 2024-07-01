function building(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);

  for (let i = x; i > 0; i--) {
    let buff = "";

    for (let j = 0; j < y; j++) {
      if (i === x) {
        buff += `L${i}${j} `;
      } else if (i % 2 === 0) {
        buff += `O${i}${j} `;
      } else {
        buff += `A${i}${j} `;
      }
    }
    console.log(buff);
  }
}
building(["6", "4"]);

/*
even - office
odd-apartment


L60 L61 L62 L63
A50 A51 A52 A53
O40 O41 O42 O43
A30 A31 A32 A33
O20 O21 O22 O23
A10 A11 A12 A13

*/
