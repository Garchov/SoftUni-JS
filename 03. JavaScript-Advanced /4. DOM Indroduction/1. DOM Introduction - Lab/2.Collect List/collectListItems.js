function extractText() {
  // get ul list element
  let liElement = document.querySelectorAll("li");

  // get list item exists
  const items = Array.from(liElement).map((liElemnet) => liElemnet.textContent);

  console.log(items);

  //Get result element
  let resultElement = document.getElementById("result");

  //populate in result element
  resultElement.value = items.join("\n");
}

// function extractText() {
//   let ulElement = document.getElementById("items");

//   let textAreaElement = document.getElementById("result");
//   textAreaElement.textContent = ulElement.textContent;
// }
