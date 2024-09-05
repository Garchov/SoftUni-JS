import { getCharacterById, updateCharacter } from '../data/characters.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const editTemplate = (character, onSubmit) => html`
<section id="edit">
    <div class="form">
      <h2>Edit Character</h2>
      <form @submit=${onSubmit} class="edit-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Character Name"
          .value=${character.name}
        />
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          placeholder="Image URL"
          .value=${character.imageUrl}
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        >${character.description}</textarea>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          .value=${character.category}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
</section>`;

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const character = await getCharacterById(id);
    render(editTemplate(character, createSubmitHandler(onSubmit)));
    
    async function onSubmit(data) {
        if (!data.name || !data.imageUrl || !data.description || !data.category) {
            return alert('All fields are required!');
        }

        await updateCharacter(id, data);
        page.redirect('/catalog/' + id);
    }
}
