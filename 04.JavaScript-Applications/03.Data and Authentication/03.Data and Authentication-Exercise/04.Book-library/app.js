function solve() {
    const loadBooksBtn = document.getElementById('loadBooks');
    const tableBodyRef = document.querySelector('tbody');
    const formRef = document.querySelector('form');
    const URL = 'http://localhost:3030/jsonstore/collections/books';

    let currentId = null;

    loadBooksBtn.addEventListener('click', onLoad);

    formRef.addEventListener('submit', onSubmit);

    async function onLoad() {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Failed to load books');
            }
            const data = await response.json();
            clearTable();
            Object.entries(data).forEach(([id, book]) => {
                const row = createTableRow(id, book);
                tableBodyRef.appendChild(row);
            });
        } catch (error) {
            console.error('Error loading books:', error);
        }
    }

    function createTableRow(id, book) {
        const row = document.createElement('tr');
        row.id = id;

        const titleTd = document.createElement('td');
        titleTd.textContent = book.title;

        const authorTd = document.createElement('td');
        authorTd.textContent = book.author;

        const actionsTd = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => startEdit(id, book));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteBook(id));

        actionsTd.appendChild(editBtn);
        actionsTd.appendChild(deleteBtn);

        row.appendChild(titleTd);
        row.appendChild(authorTd);
        row.appendChild(actionsTd);

        return row;
    }

    function startEdit(id, book) {
        currentId = id;
        formRef.querySelector('input[name="title"]').value = book.title;
        formRef.querySelector('input[name="author"]').value = book.author;
        formRef.querySelector('button').textContent = 'Save';
        formRef.querySelector('button').removeEventListener('click', onSubmit);
        formRef.querySelector('button').addEventListener('click', onSave);
        formRef.style.display = 'block';
    }

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(formRef);
        const title = formData.get('title').trim();
        const author = formData.get('author').trim();

        if (!title || !author) {
            return alert('Both fields are required.');
        }

        try {
            await createBook({ title, author });
            formRef.reset();
            onLoad();
        } catch (error) {
            console.error('Error creating book:', error);
        }
    }

    async function createBook(book) {
        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book),
        });
        if (!response.ok) {
            throw new Error('Failed to create book');
        }
    }

    async function onSave(event) {
        event.preventDefault();

        const fullPatch = `${URL}/${currentId}`;

        const formData = new FormData(formRef);
        const title = formData.get('title').trim();
        const author = formData.get('author').trim();

        if (!title || !author) {
            return alert('Both fields are required.');
        }

        try {
            await updateBook(currentId, { title, author });
            formRef.reset();
            formRef.querySelector('button').textContent = 'Submit';
            formRef.querySelector('button').removeEventListener('click', onSave);
            formRef.querySelector('button').addEventListener('click', onSubmit);
            formRef.style.display = 'none';
            onLoad();
        } catch (error) {
            console.error('Error updating book:', error);
        }
    }

    async function updateBook(id, book) {
        const response = await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book),
        });
        if (!response.ok) {
            throw new Error('Failed to update book');
        }
    }

    async function deleteBook(id) {
        try {
            await fetch(`${URL}/${id}`, { method: 'DELETE' });
            onLoad();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }

    function clearTable() {
        tableBodyRef.innerHTML = '';
    }
}

solve();