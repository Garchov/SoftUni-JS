import { getCharacterById, deleteCharacter } from '../data/characters.js';
import { html, render, page } from '../lib.js';
import { getUserData, hasOwner } from '../utils.js';

const detailsTemplate = (character, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${character.imageUrl} alt="Character Image" />
      <div>
        <h3>${character.name}</h3>
        <p>${character.description}</p>
        <p>Category: ${character.category}</p>
        ${isOwner ? html`
          <a href="/edit/${character._id}" class="button">Edit</a>
          <button @click=${onDelete} class="button">Delete</button>
        ` : null}
      </div>
    </div>
</section>`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const character = await getCharacterById(id);
    const userData = getUserData();
    const isOwner = hasOwner(userData, character._ownerId);

    render(detailsTemplate(character, isOwner, onDelete));

    async function onDelete() {
        const confirmation = confirm('Are you sure you want to delete this character?');
        if (confirmation) {
            await deleteCharacter(id);
            page.redirect('/catalog');
        }
    }
}
