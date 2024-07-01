function breakForLoops() {
  for (let a = 1; a <= 5; a++) {
    if (a === 3) {
      continue;
    }
    console.log(a);
  }
}

breakForLoops();
