window.addEventListener("load", solve);

function solve() {
  const inputName = document.getElementById("snowman-name");
  const inputHeight = document.getElementById("snowman-height");
  const inputLocation = document.getElementById("location");
  const inputCreator = document.getElementById("creator-name");
  const selectField = document.getElementById("special-attribute");
  const addBtn = document.querySelector(".add-btn");
  const snowManPreview = document.querySelector(".snowman-preview");
  const snowList = document.querySelector(".snow-list");

  addBtn.addEventListener("click", add);

  function add(e) {
   
    e.preventDefault();

    if (!inputName.value || !inputHeight.value || !inputLocation.value || !inputCreator.value || !selectField.value) {
      return;
    }

    const snowman = {
      Name: inputName.value,
      Height: inputHeight.value,
      Location: inputLocation.value,
      Creator: inputCreator.value,
      Attribute: selectField.value
    };

    const li = createSnowmanListItem(snowman);

    snowManPreview.appendChild(li);
    clearInputs();
    addBtn.setAttribute("disabled", true);
  }

  function createSnowmanListItem(snowman) {
    const li = document.createElement("li");
    li.classList.add("snowman-info");
    const article = document.createElement("article");

    const pName = document.createElement("p");
    pName.innerHTML = `Name:<br>${snowman.Name}`;

    const pHeight = document.createElement("p");
    pHeight.innerHTML = `Height:<br>${snowman.Height}`;

    const pLocation = document.createElement("p");
    pLocation.innerHTML = `Location:<br>${snowman.Location}`;

    const pCreator = document.createElement("p");
    pCreator.innerHTML = `Creator:<br>${snowman.Creator}`;

    const pAttribute = document.createElement("p");
    pAttribute.innerHTML = `Attribute:<br>${snowman.Attribute}`;

    article.appendChild(pName);
    article.appendChild(pHeight);
    article.appendChild(pLocation);
    article.appendChild(pCreator);
    article.appendChild(pAttribute);
    li.appendChild(article);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editSnowman(snowman, li));

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.textContent = "Next";
    nextBtn.addEventListener("click", () => moveSnowmanToNext(snowman, li));

    li.append(editBtn, nextBtn);
    return li;
  }

  function clearInputs() {
    inputName.value = "";
    inputHeight.value = "";
    inputLocation.value = "";
    inputCreator.value = "";
    selectField.value = "";
  }

  function editSnowman(snowman, li) {
    inputName.value = snowman.Name;
    inputHeight.value = snowman.Height;
    inputLocation.value = snowman.Location;
    inputCreator.value = snowman.Creator;
    selectField.value = snowman.Attribute;

    li.remove();
    addBtn.removeAttribute("disabled");
  }

  function moveSnowmanToNext(snowman, li) {
    const newLi = createSnowmanListItem(snowman);

    const sendBtn = document.createElement("button");
    sendBtn.classList.add("send-btn");
    sendBtn.textContent = "Send";
    sendBtn.addEventListener("click", sendSnowman);

    newLi.appendChild(sendBtn);
    snowList.appendChild(newLi);
    li.remove();
    snowManPreview.innerHTML = "";
  }

  function sendSnowman() {
    document.querySelector("main").remove();
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    backBtn.addEventListener("click", () => location.reload());
    document.body.appendChild(backBtn);

    document.getElementById("back-img").hidden = false;
  }
}
