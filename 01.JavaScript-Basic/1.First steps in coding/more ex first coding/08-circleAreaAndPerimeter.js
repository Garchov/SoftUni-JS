function circleAreaAndPerimeter (input ){
let r = Number(input[0]);
let calculateArea = Math.PI * r*r;
let calculateParameter = 2 * Math.PI * r
console.log(calculateArea.toFixed(2))
console.log(calculateParameter.toFixed(2))

}

circleAreaAndPerimeter(['3']);
