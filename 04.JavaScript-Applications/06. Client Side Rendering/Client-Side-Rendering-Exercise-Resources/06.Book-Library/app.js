import { html, render } from "./node_modules/lit-html/lit-html.js";
const URL = 'http://localhost:3030/jsonstore/collections/books';

const rootTable = document.getElementById("rootTable");
const rootForm = document.getElementById("rootForm");

const tableTemp = (books) => html`

    <button id="loadBooks" @click=${onLoadAllBooks}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${books?.map(book => createBookTemp(book))}
        
        </tbody>
    </table>
`;
debugger
const createBookTemp = (book) => html`
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button @click=${() => onEditBook(book)} data-id=${book._id}>Edit</button>
        <button @click=${() => onDeleteBook(book._id)} data-id=${book._id}>Delete</button>
    </td>
</tr>
`;

const addFormTemp = (book) => html`
<form @submit=${onSubmit} id="add-form">
    <h3>${book ? "Edit" : "Add"} book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book ? book.title : ""}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book ? book.author : ""}>
    <input type="submit" value=${book ? "Update" : "Submit"}>
</form>
`;

render(addFormTemp(), rootForm);

async function onLoadAllBooks() {
    const response = await fetch(URL);
    const data = await response.json();
  
    Object.entries(data).forEach(([id, book]) => {
        if (!book.hasOwnProperty('_id')) {
            book._id = id;
        }
    });
    render(tableTemp(Object.values(data)), rootTable);
}

async function saveBook(book, id) {
    const option = {
        method: id ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    };
    const response = await fetch(id ? `${URL}/${id}` : URL, option);
    onLoadAllBooks();
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { title, author } = Object.fromEntries(formData);
    if (!title || !author) {
        return;
    }
    const id = e.target.dataset.id;
    e.target.reset();
    await saveBook({ title, author }, id);
    render(addFormTemp(), rootForm);
}

async function onEditBook(book) {
    render(addFormTemp(book), rootForm);
}

async function onDeleteBook(bookId) {
    const option = {
        method: 'DELETE'
    };
    await fetch(`${URL}/${bookId}`, option);
    onLoadAllBooks();
}

// Initially load all books
onLoadAllBooks();