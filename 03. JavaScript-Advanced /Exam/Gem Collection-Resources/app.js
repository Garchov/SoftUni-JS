window.addEventListener("load", solve);

function solve() {
  let inputFields = document.querySelector(".inner-wrap").children;

  let gemName = inputFields[0];
  let colorInput = inputFields[1];
  let caratsInput = inputFields[2];
  let priceInput = inputFields[3];
  let dropdown = inputFields[4];

  let addBtn = document.getElementById("add-btn");

  addBtn.addEventListener("click", addGem);

  function addGem() {
    if (
      gemName.value === "" ||
      colorInput.value === "" ||
      caratsInput.value === "" ||
      priceInput.value === "" ||
      dropdown.value === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    let previewList = document.getElementById("preview-list");
    let li = document.createElement("li");
    li.classList.add("gem-info");

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = gemName.value;

    let colorPara = document.createElement("p");
    colorPara.textContent = `Color: ${colorInput.value}`;

    let caratsPara = document.createElement("p");
    caratsPara.textContent = `Carats: ${caratsInput.value}`;

    let pricePara = document.createElement("p");
    pricePara.textContent = `Price: ${priceInput.value}`;

    let typePara = document.createElement("p");
    typePara.textContent = `Type: ${dropdown.value}`;

    article.appendChild(h4);
    article.appendChild(colorPara);
    article.appendChild(caratsPara);
    article.appendChild(pricePara);
    article.appendChild(typePara);
    li.appendChild(article);
    previewList.appendChild(li);

    gemName.value = "";
    colorInput.value = "";
    caratsInput.value = "";
    priceInput.value = "";
    dropdown.value = "";

    addBtn.setAttribute("disabled", true);

    let saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save to Collection";
    li.appendChild(saveBtn);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Information";
    li.appendChild(editBtn);

    let cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";
    li.appendChild(cancelBtn);

    editBtn.addEventListener("click", editGem);

    function editGem() {
      gemName.value = h4.textContent;
      colorInput.value = colorPara.textContent.replace("Color: ", "");
      caratsInput.value = caratsPara.textContent.replace("Carats: ", "");
      priceInput.value = pricePara.textContent.replace("Price: ", "");
      dropdown.value = typePara.textContent.replace("Type: ", "");

      li.remove();
      addBtn.removeAttribute("disabled");
    }

    saveBtn.addEventListener("click", saveGem);

    function saveGem(e) {
      let collectionList = document.getElementById("collection");
      let li = document.createElement("li");
      let p = document.createElement("p");

      p.classList.add("collection-item");
      p.textContent = `Name: ${h4.textContent} - Color: ${colorPara.textContent.replace("Color: ", "")} - Carats: ${caratsPara.textContent.replace("Carats: ", "")} - Price: ${pricePara.textContent.replace("Price: ", "")} - Type: ${typePara.textContent.replace("Type: ", "")}`;

      li.appendChild(p);
      collectionList.appendChild(li);
      previewList.removeChild(e.target.parentElement);

      addBtn.removeAttribute("disabled");
    }

    cancelBtn.addEventListener("click", cancelGem);

    function cancelGem() {
      li.remove();
      addBtn.removeAttribute("disabled");
    }
  }
}
