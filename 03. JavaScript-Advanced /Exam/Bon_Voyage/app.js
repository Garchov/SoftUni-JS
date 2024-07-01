window.addEventListener('load', solve);
function solve(e) {
   
    const form = document.querySelector("form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const fromDateInput = document.getElementById("from-date");
    const toDateInput = document.getElementById("to-date");
    const nextButton = document.getElementById("next-btn");
    const infoList = document.querySelector(".info-list");
    const confirmList = document.querySelector(".confirm-list");
    const statusElement = document.getElementById("status");
  
    nextButton.addEventListener("click", function (event) {
      event.preventDefault();
  
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const fromDate = new Date(fromDateInput.value);
      const toDate = new Date(toDateInput.value);
  
      if (!isValidVacation(firstName, lastName, fromDate, toDate)) {
        return;
      }
  
      addVacationInfo(firstName, lastName, fromDate, toDate);
      clearForm();
      nextButton.disabled = true;
      enableEditAndContinueButtons();
    });
  
    function isValidVacation(firstName, lastName, fromDate, toDate) {
      return firstName && lastName && !isNaN(fromDate) && !isNaN(toDate) && fromDate < toDate;
    }
  
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
  
    function clearForm() {
      firstNameInput.value = "";
      lastNameInput.value = "";
      fromDateInput.value = "";
      toDateInput.value = "";
    }
  
    function addVacationInfo(firstName, lastName, fromDate, toDate) {
      const li = document.createElement("li");
      const article = document.createElement("article");
      const nameH3 = document.createElement("h3");
      nameH3.textContent = `Name: ${firstName} ${lastName}`;
      const fromP = document.createElement("p");
      fromP.textContent = `From date: ${formatDate(fromDate)}`;
      const toP = document.createElement("p");
      toP.textContent = `To date: ${formatDate(toDate)}`;
  
      article.appendChild(nameH3);
      article.appendChild(fromP);
      article.appendChild(toP);
      li.appendChild(article);
      infoList.appendChild(li);
    }
  
    function enableEditAndContinueButtons() {
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "edit-btn";
      editButton.addEventListener("click", function () {
        editVacation();
      });
  
      const continueButton = document.createElement("button");
      continueButton.textContent = "Continue";
      continueButton.className = "continue-btn";
      continueButton.addEventListener("click", function () {
        continueVacation();
      });
  
      form.appendChild(editButton);
      form.appendChild(continueButton);
    }
  
    function disableEditAndContinueButtons() {
      const editButton = document.querySelector(".edit-btn");
      const continueButton = document.querySelector(".continue-btn");
      if (editButton) editButton.remove();
      if (continueButton) continueButton.remove();
    }
  
    function editVacation() {
      const li = infoList.querySelector("li");
      if (li) {
        const [nameH3, fromP, toP] = li.querySelector("article").children;
        const [firstName, lastName] = nameH3.textContent.split(": ")[1].split(" ");
        const fromDate = fromP.textContent.split(": ")[1];
        const toDate = toP.textContent.split(": ")[1];
  
        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        fromDateInput.value = fromDate;
        toDateInput.value = toDate;
  
        li.remove();
        nextButton.disabled = false;
        disableEditAndContinueButtons();
      }
    }
  
    function continueVacation() {
      const li = infoList.querySelector("li");
      if (li) {
        confirmList.appendChild(li);
        const confirmButton = document.createElement("button");
        confirmButton.textContent = "Confirm";
        confirmButton.className = "confirm-btn";
        confirmButton.addEventListener("click", function () {
          confirmVacation(li);
        });
  
        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.className = "cancel-btn";
        cancelButton.addEventListener("click", function () {
          cancelVacation(li);
        });
  
        const liControls = document.createElement("li");
        liControls.appendChild(confirmButton);
        liControls.appendChild(cancelButton);
        confirmList.appendChild(liControls);
  
        disableEditAndContinueButtons();
      }
    }
  
    function confirmVacation(li) {
      li.remove();
      const liControls = confirmList.querySelector("li");
      if (liControls) liControls.remove();
      nextButton.disabled = false;
      statusElement.textContent = "Vacation Requested";
      statusElement.className = "vacation-confirmed";
    }
  
    function cancelVacation(li) {
      li.remove();
      const liControls = confirmList.querySelector("li");
      if (liControls) liControls.remove();
      nextButton.disabled = false;
      statusElement.textContent = "Cancelled Vacation";
      statusElement.className = "vacation-cancelled";
    }
  
    statusElement.addEventListener("click", function () {
      location.reload();
    });
  }
  