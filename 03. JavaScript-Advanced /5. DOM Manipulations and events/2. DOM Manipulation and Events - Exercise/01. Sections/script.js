function create(words) {
  let sectionsList = document.getElementById("content");
  createAndAppendDivElement(sectionsList);

  function createAndAppendDivElement(root) {
    for (let i = 0; i < words.length; i++) {
      const divElement = document.createElement("div");
      const pEl = document.createElement("p");
      pEl.textContent = words[i];
      pEl.style.display = "none";

      divElement.append(pEl);

      divElement.addEventListener("click", onClick);
      root.appendChild(divElement);
    }
  }
  function onClick(event) {
    const target = event.target;
    const children = target.children;
    const p = children[0];
    const currentDisplay = p.style.display;
    p.style.display = currentDisplay === "block" ? "none" : "block";

    //  event.target.children[0].style.display = "block";
  }
}
