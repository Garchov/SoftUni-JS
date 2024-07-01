function sortArrBy2Criteria(input) {
  let sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

  console.log(sorted.join("\n"));
}

/* sortArrBy2Criteria(['alpha', 'beta', 'gamma']) */
sortArrBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
