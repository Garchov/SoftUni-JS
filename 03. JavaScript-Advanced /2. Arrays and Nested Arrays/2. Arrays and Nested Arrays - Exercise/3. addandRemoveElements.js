function addAndRemoveElements(array) {
  let result = [];
  let initialNum = 1;

  array.forEach((command) => {
    command === "add" ? result.push(initialNum) : result.pop(initialNum);
    initialNum++;
  });
  result.length > 0 ? console.log(result.join("\n")) : console.log("Empty");
}
// addAndRemoveElements(["add", "add", "add", "add"]);
// addAndRemoveElements(["remove", "remove", "remove"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
