function circleArea(input) {
  let type = typeof input;

  if (type == "number") {
    console.log((Math.pow(input, 2) * Math.PI).toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
circleArea(5);
circleArea("name");
