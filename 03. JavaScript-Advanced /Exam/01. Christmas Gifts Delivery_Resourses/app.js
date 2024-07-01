function solution() {
  const sections = document.querySelectorAll("section");
  const addGiftSection = sections[0];
  const listOfGiftsSection = sections[1].querySelector("ul");
  const sentGiftsSection = sections[2].querySelector("ul");
  const discardedGiftsSection = sections[3].querySelector("ul");

  const addGiftButton = addGiftSection.querySelector("button");

  addGiftButton.addEventListener("click", (e) => {
    const giftInput = addGiftSection.querySelector("input[type='text']");
    const giftName = giftInput.value.trim();

    if (giftName === "") {
      return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add("gift");
    listItem.textContent = giftName;

    const sendButton = createButton("sendButton", "Send", onSend);
    const discardButton = createButton("discardButton", "Discard", onDiscard);

    listItem.appendChild(sendButton);
    listItem.appendChild(discardButton);

    listOfGiftsSection.appendChild(listItem);
    sortGifts(listOfGiftsSection);

    giftInput.value = "";
  });

  function createButton(id, text, clickHandler) {
    const button = document.createElement("button");
    button.id = id;
    button.textContent = text;
    button.addEventListener("click", clickHandler);
    return button;
  }

  function onSend(event) {
    const listItem = event.target.parentElement;
    const giftName = listItem.childNodes[0].textContent;
    
    const sentItem = document.createElement("li");
    sentItem.textContent = giftName;

    sentGiftsSection.appendChild(sentItem);
    listItem.remove();
  }

  function onDiscard(event) {
    const listItem = event.target.parentElement;
    const giftName = listItem.childNodes[0].textContent;

    const discardedItem = document.createElement("li");
    discardedItem.textContent = giftName;

    discardedGiftsSection.appendChild(discardedItem);
    listItem.remove();
  }

  function sortGifts(list) {
    Array.from(list.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((sortedItem) => list.appendChild(sortedItem));
  }
}

document.addEventListener("DOMContentLoaded", solution);