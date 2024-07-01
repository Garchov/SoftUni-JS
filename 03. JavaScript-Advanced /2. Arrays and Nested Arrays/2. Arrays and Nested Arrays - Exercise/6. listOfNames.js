function listOfNames(input) {
  let result = input
    .sort((a, b) => a.localeCompare(b))
    .map((x, i) => `${i + 1}.${x}`)
    .join("\n")
    .toString();
  console.log(result);
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
