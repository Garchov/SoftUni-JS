function checkDistance(points) {
  let x1 = points[0];
  let y1 = points[1];
  let x2 = points[2];
  let y2 = points[3];

  let distanceToOrigin1 = Math.sqrt(x1 * x1 + y1 * y1);
  let distanceToOrigin2 = Math.sqrt(x2 * x2 + y2 * y2);

  let distanceBetweenPoints = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
  );

  let isValidToOrigin1 = Number.isInteger(distanceToOrigin1);
  let isValidToOrigin2 = Number.isInteger(distanceToOrigin2);
  let isValidBetweenPoints = Number.isInteger(distanceBetweenPoints);

  if (isValidToOrigin1 && isValidToOrigin2 && isValidBetweenPoints) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

checkDistance([3, 0, 0, 4]);
checkDistance([2, 1, 1, 1]);
