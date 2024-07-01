function cookingMasterclass(array) {
  let [budget, students, flour, egg, apron] = array.map(Number);
  let sumfreePackadges = 0;

  for (let i = 1; i <= students; i++) {
    if (i % 5 == 0) {
      sumfreePackadges++;
    }
  }

  let apronsMUltiplied =
    apron * Math.ceil(students * 1.2) +
    egg * 10 * students +
    flour * (students - sumfreePackadges);

  if (apronsMUltiplied > budget) {
    console.log(`${(apronsMUltiplied - budget).toFixed(2)}$ more needed.`);
  } else {
    console.log(`Items purchased for ${apronsMUltiplied.toFixed(2)}$.`);
  }
}
cookingMasterclass(["946", "20", "12.05", "0.42", "27.89"]);
cookingMasterclass(["50", "2", "1.0", "0.10", "10.0"]);
