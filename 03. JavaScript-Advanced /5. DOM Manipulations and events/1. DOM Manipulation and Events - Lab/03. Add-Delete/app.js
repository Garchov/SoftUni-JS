function addItem() {
  const itemListElement = document.getElementById("items");
  const newItemsInput = document.getElementById("newItemText");

  //Create li element
  const liElement = document.createElement("li");
  liElement.textContent = newItemsInput.value;

  //create a element for delete
  const deleteButton = document.createElement("a");
  deleteButton.target = "#";
  deleteButton.textContent = "[Delete]";

  //Append a element to li element
  liElement.appendChild(deleteButton);

  //Append li element
  itemListElement.appendChild(liElement);

  //Add event handler to the delete element

  deleteButton.addEventListener("click", (e) => {
    //delete by parent
    // e.currentTarget.parentElement.remove();

    //Delete by reference
    liElement.remove();
  });

  //Clean up
  newItemsInput.value = "";
}





// function addItem() {
//   let itemsElement = document.getElementById("items");
//   let inputElement = document.getElementById("newItemText");

//   let liElement = document.createElement("li");
//   liElement.textContent = inputElement.value;
//   inputElement.value = "";

//   let deleteElement = document.createElement("a");
//   deleteElement.href = "#";
//   deleteElement.textContent = "[Delete]";
//   deleteElement.addEventListener("click", (e) => {
//     e.currentTarget.parentElement.remove();
//   });
//   liElement.appendChild(deleteElement);
//   itemsElement.appendChild(liElement);
// }
