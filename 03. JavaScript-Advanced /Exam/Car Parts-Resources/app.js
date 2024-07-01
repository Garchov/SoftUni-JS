window.addEventListener("load", solve);

function solve() {
    document.querySelector("form").addEventListener("submit", onSubmit);
    const carModelRef = document.getElementById("car-model");
    const carYearRef = document.getElementById("car-year");
    const partNameRef = document.getElementById("part-name");
    const partNumberRef = document.getElementById("part-number");
    const conditionRef = document.getElementById("condition");
    const infoListRef = document.querySelector(".info-list");
    const nextBtnRef = document.getElementById("next-btn");
    const confirmListRef = document.querySelector(".confirm-list");

    function onSubmit(event) {
        event.preventDefault();
        const carModel = carModelRef.value;
        const carYear = Number(carYearRef.value);
        const partName = partNameRef.value;
        const partNumber = partNumberRef.value;
        const condition = conditionRef.value;

        if (
            !carModel ||
            !carYear ||
            !partName ||
            !partNumber ||
            !condition ||
            carYear < 1980 ||
            carYear > 2023
        ) {
            return;
        }

        const li = createLi(carModel, carYear, partName, partNumber, condition);
        infoListRef.appendChild(li);
        clearInputFields();
        nextBtnRef.disabled = true;
        document.getElementById("complete-img").style.visibility = "hidden";
        document.getElementById("complete-text").textContent = "";
    }

    function clearInputFields() {
        carModelRef.value = "";
        carYearRef.value = "";
        partNameRef.value = "";
        partNumberRef.value = "";
        conditionRef.value = "";
    }

    function createLi(carModel, carYear, partName, partNumber, condition) {
        const li = document.createElement("li");
        li.classList.add("part-content");

        const article = document.createElement("article");
        article.innerHTML = `
            <p>Car Model: ${carModel}</p>
            <p>Car Year: ${carYear}</p>
            <p>Part Name: ${partName}</p>
            <p>Part Number: ${partNumber}</p>
            <p>Condition: ${condition}</p>
        `;
        li.appendChild(article);

        const editBtn = createBtn("edit-btn", "Edit", onEdit);
        const continueBtn = createBtn("continue-btn", "Continue", onContinue);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        return li;
    }

    function createBtn(classes, text, handler) {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.classList.add(classes);
        btn.addEventListener("click", handler);
        return btn;
    }

    function onEdit(event) {
        const li = event.target.parentElement;
        const parts = Array.from(li.querySelectorAll("p"));
        const [carModel, carYear, partName, partNumber, condition] = parts.map(p => p.textContent.split(": ")[1]);

        carModelRef.value = carModel;
        carYearRef.value = carYear;
        partNameRef.value = partName;
        partNumberRef.value = partNumber;
        conditionRef.value = condition;

        li.remove();
        nextBtnRef.disabled = false;
    }

    function onContinue(event) {
        const li = event.target.parentElement;
        Array.from(li.querySelectorAll("button")).forEach(btn => btn.remove());

        const confirmBtn = createBtn("confirm-btn", "Confirm", onConfirm);
        const cancelBtn = createBtn("cancel-btn", "Cancel", onCancel);
        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);

        confirmListRef.appendChild(li);
    }

    function onConfirm(event) {
        event.target.parentElement.remove();
        nextBtnRef.disabled = false;
        document.getElementById("complete-img").style.visibility = "visible";
        document.getElementById("complete-text").textContent = "Part is Ordered!";
    }

    function onCancel(event) {
        event.target.parentElement.remove();
        nextBtnRef.disabled = false;
    }
}

/*
function solve() {
  document.querySelector("form").addEventListener("submit", onSubmit);
  const carModelRef = document.getElementById("car-model");
  const carYearRef = document.getElementById("car-year");
  const partNameRef = document.getElementById("part-name");
  const partNumberRef = document.getElementById("part-number");
  const conditionRef = document.getElementById("condition");
  const infoListRef = document.querySelector(".info-list");
  const nextBtnRef = document.getElementById("next-btn");
  const confirmListRef = document.querySelector(".confirm-list");

  function onSubmit(event) {
    event.preventDefault();
    const carModel = carModelRef.value;
    const carYear = carYearRef.value;
    const partName = partNameRef.value;
    const partNumber = partNumberRef.value;
    const condition = conditionRef.value;

    // Validate input fields
    if (
      !carModel ||
      !carYear ||
      !partName ||
      !partNumber ||
      !condition ||
      (carYear < 1980 ||
      carYear > 2023)
    ) {
      return;
    }
    const li = createLi(carModel, carYear, partNumber, partName, condition);

    infoListRef.append(li);
    clearInputField(
      carModelRef,
      carYearRef,
      partNameRef,
      partNumberRef,
      conditionRef
    );
    toggleNextBtn();
    document.getElementById("complete-img").style.visibility = "hidden";
    document.getElementById("complete-img").textContent= "";
  }
  function toggleNextBtn() {
    nextBtnRef.disabled = !nextBtnRef.disabled;
  }

  function clearInputField(...field) {
    field.forEach((el) => (el.value = ""));
  }
  function createLi(carModel, carYear, partName, partNumber, condition) {
    const li = document.createElement("li");
    li.classList.add("part-content");
    const article = createArticle(
      carModel,
      carYear,
      partName,
      partNumber,
      condition
    );
    const editBtn = createBtnAndAddListener("edit-btn", "Edit", onEdit);
    const continueBtn = createBtnAndAddListener(
      "continue-btn",
      "Continue",
      onContinue
    );

    li.append(article);
    article.appendChild(editBtn);
    article.appendChild(continueBtn);

    return li;
  }

  function createBtnAndAddListener(classes, text, handler) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.classList.add(classes);
    btn.addEventListener("click", handler);
    return btn;
  }
  function createArticle(carModel, carYear, partName, partNumber, condition) {
    const article = document.createElement("article");
    const pCarModel = document.createElement("p");
    pCarModel.textContent = "Car Model: " + carModel;

    const pCarYear = document.createElement("p");
    pCarYear.textContent = "Car Year: " + carYear;

    const pPartName = document.createElement("p");
    pPartName.textContent = "Part Name: " + partName;

    const pPartNumber = document.createElement("p");
    pPartNumber.textContent = "Part Number: " + partNumber;

    const pCondition = document.createElement("p");
    pCondition.textContent = "Condition: " + condition;

    article.append(pCarModel);
    article.append(pCarYear);
    article.append(pPartName);
    article.append(pPartNumber);
    article.append(pCondition);

    return article;
  }
  function onEdit(event) {
    const li = event.target.parentElement;
    const pList = li.querySelectorAll("p");
    const [carModel, carYear, partName, partNumber, condition] = Array.from(
      pList
    ).map((x) => {
      const [staticText, value] = x.textContent.split(": ");
      return value;
    });
    carModelRef.value = carModel;
    carYearRef.value = carYear;
    partNameRef.value = partName;
    partNumberRef.value = partNumber;
    conditionRef.value = condition;

    toggleNextBtn();
    li.remove();
  }
  function onContinue(event) {
    const li = event.target.parentElement;
    li.querySelectorAll("button").forEach((x) => x.remove());
    const confirmBtn = createBtnAndAddListener(
      "confirm-btn",
      "Confirm",
      onConfirm
    );
    const cancelBtn = createBtnAndAddListener("cancel-btn", "Cancel", onCancel);
    li.append(confirmBtn);
    li.append(cancelBtn);
    confirmListRef.append(li);
  }
  function onConfirm(event) {
    event.currentTarget.parentElement.remove();
    toggleNextBtn();
    document.getElementById("complete-img").textContent= "Part is Ordered!";
    document.getElementById("complete-img").style.visibility = "visible";
  }
  function onCancel(event) {
    event.target.parentElement.remove();
    toggleNextBtn();
  }
}

*/