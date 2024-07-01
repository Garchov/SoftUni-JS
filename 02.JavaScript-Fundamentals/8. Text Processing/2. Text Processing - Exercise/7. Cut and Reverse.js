function cutAndReverse(text) {
  let divideTextHalf = text.length / 2;

  let firstHalf = text
    .substring(0, divideTextHalf)
    .split("")
    .reverse()
    .join("");

  let secondHalf = text
  .substring(divideTextHalf)
  .split("")
  .reverse()
  .join("");
  
  console.log(firstHalf);
  console.log(secondHalf);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
