import { createCharacter } from '../data/characters.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
      <h2>Create New Character</h2>
      <form @submit=${onSubmit} class="create-form">
        <input type="text" name="name" id="name" placeholder="Character Name" />
        <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
        <textarea id="description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
        <input type="text" name="category" id="category" placeholder="Category" />
        <button type="submit">Create Character</button>
      </form>
    </div>
</section>`;

export function showCreateView() {
    render(createTemplate(createSubmitHandler(onSubmit)), document.querySelector('main'));
}

async function onSubmit(data) {
    if (!data.name || !data.imageUrl || !data.description || !data.category) {
        return alert('All fields are required!');
    }

    await createCharacter(data);
    page.redirect('/catalog');
}
