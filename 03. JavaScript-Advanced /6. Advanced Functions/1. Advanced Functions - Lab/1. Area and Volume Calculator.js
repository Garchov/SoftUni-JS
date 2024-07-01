function solve(areaFn, volFn, input) {
  const data = JSON.parse(input);

  let result = [];
  for (const fig of data) {
    result.push({
      area: areaFn.call(fig),
      volume: volFn.call(fig),
    });
  }
  return result;
}
const data = `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"}
  ]`;
const data2 = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`;

solve(area, vol, data);
solve(area, vol, data2);

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function area() {
  return Math.abs(this.x * this.y);
}

// function solve(area, vol, input) {
//     const data = JSON.parse(input);
//     const result =[];
//     for (const line of data) {
//         // const points = Object.keys(line)
//         // .reduce((result,key)=> ({...result,[key]:Number(line[key])}),{})
//         // .reduce((result, key) => {
//             //   result[key] = Number(points[key]);

//             //   return result;
//             // }, {});

//             result.push({
//                 area:area.call(line),
//                 vol:vol.call(line),
//             });
//         }
//         return result
//     }
//     function area() {
//       return Math.abs(this.x * this.y);
//     }

//     function vol() {
//       return Math.abs(this.x * this.y * this.z);
//     }

// solve(
//   area,
//   vol,
//   `[
//     {"x":"1","y":"2","z":"10"},
//     {"x":"7","y":"7","z":"10"},
//     {"x":"5","y":"2","z":"10"}
//     ]`
// );
