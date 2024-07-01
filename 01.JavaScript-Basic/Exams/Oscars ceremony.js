function test(input) {
  let rentHall = Number(input[0]);
  let totalexpense = 0;

  let statue = rentHall * 0.7;
  let cetaring = statue * 0.85;
  let audio = cetaring / 2;

  totalexpense = rentHall + statue + cetaring + audio;
  console.log(totalexpense.toFixed(2));
}
test(["3500"]);
