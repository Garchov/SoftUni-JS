window.addEventListener("load", solve);

function solve() {
  let ticketCount = document.getElementById("num-tickets"); //value;
  let seatingPreference = document.getElementById("seating-preference"); //textContent;
  let fullName = document.getElementById("full-name"); // value
  let email = document.getElementById("email"); // value
  let phoneNumber = document.getElementById("phone-number"); // value

  let purchaseBtn = document.getElementById("purchase-btn");

  purchaseBtn.addEventListener("click", function (e) {
    let unorderedList = document.getElementById("ticket-preview");

    let li = document.createElement("li");
    li.classList.add("ticket-preview");

    unorderedList.appendChild(li).textContent =
      "Count: " + ticketCount.value + " - " + "Preference: " + seatingPreference.value + "  " +"To: " + fullName.value + "  " + "Email: " + email.value + "  " + "Phone Number: " + phoneNumber.value;
    
    const ticketCountValue = ticketCount.value;
    const seatingPreferenceValue = seatingPreference.value;
    const fullNameValue = fullName.value;
    const emailValue = email.value;
    const phoneNumberValue = phoneNumber.value;
    
    let clear = document.querySelectorAll("input");
    clear.forEach((x) => (x.value = ""));

    purchaseBtn.disabled = true;
    purchaseBtn.style.display = "none";

    li.classList.add("Edit-Next-Btn");

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    li.append(editBtn);
    let nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    li.append(nextBtn);

    editBtn.addEventListener("click", function (e) {
      ticketCount.value = ticketCountValue;
      seatingPreference.value = seatingPreferenceValue;
      fullName.value = fullNameValue;
      email.value = emailValue;
      phoneNumber.value = phoneNumberValue;

      editBtn.remove();
      nextBtn.remove();
      unorderedList.removeChild(li);

      purchaseBtn.disabled = false;
      purchaseBtn.style.display = "block";
    });

    nextBtn.addEventListener("click", function (e) {
      unorderedList.classList.remove("ticket-preview");
      editBtn.remove();
      nextBtn.remove();
      li.classList.add("ticket-purchase");

      let buyBtn = document.createElement("button");
      buyBtn.textContent = "Buy";
      li.append(buyBtn);

      buyBtn.addEventListener("click", function (e) {
        li.remove();

        const purchasedList = document.getElementById("ticket-purchase");

        const thankYouMessage = document.createElement("h2");
        thankYouMessage.textContent = "Thank you for your purchase!";
        purchasedList.appendChild(thankYouMessage);

        const backButton = document.createElement("button");
        backButton.textContent = "Back";
        purchasedList.appendChild(backButton);

        backButton.addEventListener("click", function () {
          thankYouMessage.remove();
          backButton.remove();

          purchaseBtn.disabled = false;
          purchaseBtn.style.display = "block";
        });
      });
    });
  });
}

