function arrRotation(arr, rotation) {
  /*  let rot = [];
  for (let i = 0; i < arr.length; i++) {
    let newIndex = (i + rotation) % arr.length;
    rot.push(arr[newIndex]);
  }
  console.log(`${rot.join(" ")}`);
  */

  for (let i = 0; i < rotation; i++) {
    let newIndex = arr.shift();
    arr.push(newIndex);
  }
  console.log(arr.join(" "));
}
arrRotation([51, 47, 32, 61, 21], 2);
arrRotation([32, 21, 61, 1], 4);
arrRotation([2, 4, 15, 31], 5);
