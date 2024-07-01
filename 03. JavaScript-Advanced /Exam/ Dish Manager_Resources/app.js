window.addEventListener("load", solve);
function solve() {
  const firstNameRef = document.getElementById("first-name");
  const lastNameRef = document.getElementById("last-name");
  const ageRef = document.getElementById("age");
  const genderSelectRef = document.getElementById("genderSelect");
  const dishInfoRef = document.getElementById("task");
  const inProgressRef = document.getElementById("in-progress");
  const finishedRef = document.getElementById("finished");
  const progressCounterRef = document.getElementById("progress-count");
  let count = 0;

  const submitBtnRef = document.getElementById("form-btn");
  const clearBtnRef = document.getElementById("clear-btn");

  submitBtnRef.addEventListener("click", (e) => {
    e.preventDefault();

    count++;
    progressCounterRef.textContent = count;

    const fullName = `${firstNameRef.value} ${lastNameRef.value}`;
    const age = Number(ageRef.value);
    const gender = genderSelectRef.value;
    const dish = dishInfoRef.value;
    if (!firstNameRef.value || !lastNameRef.value || !age || !dish) {
      return;
    }

    const li = createLi(fullName, age, gender, dish);
    const editBtn = createButton("edit-btn", "Edit", onEdit);
    const completeBtn = createButton("complete-btn", "Complete", onComplete);

    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    inProgressRef.appendChild(li);

    cleanUp();
  });

  clearBtnRef.addEventListener("click", () => {
    finishedRef.innerHTML = "";
  });

  function createLi(fullName, age, gender, dish) {
    const li = document.createElement("li");
    li.classList.add("each-line");

    const article = document.createElement("article");
    const h4FullName = document.createElement("h4");
    h4FullName.textContent = `${fullName}`;
    article.appendChild(h4FullName);
    const pGenderAndAge = document.createElement("p");
    const genderAndAge = `${gender}, ${age}`;
    pGenderAndAge.textContent = `${genderAndAge}`;
    article.appendChild(pGenderAndAge);
    const pDish = document.createElement("p");
    pDish.textContent = `${dish}`;
    article.appendChild(pDish);
    li.appendChild(article);

    return li;
  }
  function createButton(classes, text, handler) {
    const btn = document.createElement("button");
    btn.classList.add(classes);
    btn.textContent = text;
    btn.addEventListener("click", handler);

    return btn;
  }
  function onEdit(event) {
    count--;
    progressCounterRef.textContent = count;
    const fullName =
      event.target.parentNode.children[0].children[0].textContent.split(" ");

    const firstName = fullName[0];
    const lastName = fullName[1];
    const gender =
      event.target.parentNode.children[0].children[1].textContent.split(",")[0];
    const age =
      event.target.parentNode.children[0].children[1].textContent.split(
        ", "
      )[1];
    const dish =
      event.target.parentNode.children[0].children[2].textContent.split(" ");

    firstNameRef.value = firstName;
    lastNameRef.value = lastName;
    ageRef.value = age;
    genderSelectRef.value = gender;
    dishInfoRef.value = dish;

    event.target.parentNode.remove();
  }

  function onComplete(event) {
    const li = event.target.parentNode;
    const article = li.children[0];
    finishedRef.appendChild(li);
    count--;
    progressCounterRef.textContent = count;

    let editBtn = event.target.parentNode.children[1];
    let completeBtn = event.target.parentNode.children[2];
    console.log(editBtn);

    editBtn.remove();
    completeBtn.remove();
  }

  function cleanUp(event) {
    const li = event.target.parentNode.children[1];
    console.log(li);
    li.remove();
  }
}
