const table = document.querySelector("#content tbody");
const editForm = document.getElementById("edit");

document.getElementById("create").addEventListener("submit", onSubmit);
editForm.addEventListener("submit", onEdit);

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    name: formData.get("name"),
    age: formData.get("age"),
  };
  createRecord(data);
}

async function createRecord(data) {
  const response = await fetch("http://localhost:3030/jsonstore/demo", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("Error sending request", response.status);
    console.error(await response.json());
    return;
  }

  const result = await response.json();
  console.log(result);
  getData();
}

async function getData() {
  const options={
    method: "get",
    headers: {}
  }:
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    options.headers["X-Authorization"] = accessToken;
  }
  const response = await fetch("http://localhost:3030/jsonstore/demo");

  if (!response.ok) {
    console.error("Error sending request", response.status);
    console.error(await response.json());
    return;
  }

  const result = await response.json();
  const rows = Object.values(result).map(createRow);
  table.replaceChildren(...rows);
}

function createRow(entry) {
  const row = document.createElement("tr");

  const idCol = document.createElement("td");
  idCol.textContent = entry._id;
  const nameCol = document.createElement("td");
  nameCol.textContent = entry.name;
  const ageCol = document.createElement("td");
  ageCol.textContent = entry.age;

  const ctrlCol = document.createElement("td");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteRecord(entry._id));

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => editRecord(entry._id));

  ctrlCol.appendChild(deleteBtn);
  ctrlCol.appendChild(editBtn);

  row.appendChild(idCol);
  row.appendChild(nameCol);
  row.appendChild(ageCol);
  row.appendChild(ctrlCol);

  return row;
}

async function deleteRecord(id) {
  const choice = confirm("Are you sure?");
  if (!choice) {
    return;
  }

  const response = await fetch(`http://localhost:3030/jsonstore/demo/${id}`, {
    method: "delete",
  });

  if (!response.ok) {
    return alert("Error deleting record");
  }

  getData();
}

async function editRecord(id) {
  const response = await fetch(`http://localhost:3030/jsonstore/demo/${id}`);

  if (!response.ok) {
    return alert("Error reading record");
  }

  const record = await response.json();

  editForm.querySelector('input[name="_id"]').value = record._id;
  editForm.querySelector('input[name="name"]').value = record.name;
  editForm.querySelector('input[name="age"]').value = record.age;

  editForm.querySelector('[type="submit"]').disabled = false;
}

async function onEdit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    _id: formData.get("_id"),
    name: formData.get("name"),
    age: formData.get("age"),
  };

  const response = await fetch(`http://localhost:3030/jsonstore/demo/${data._id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("Error sending request", response.status);
    console.error(await response.json());
    return;
  }

  editForm.querySelector('[type="submit"]').disabled = true;
  getData();
}

// Initial data load
getData();