import { getAllCharacters } from '../data/characters.js';
import { html, render } from '../lib.js';

const catalogTemplate = (characters) => html`
<h2>Collection</h2>
<section id="characters">
   ${characters.length > 0 
     ? characters.map(character => characterTemplate(character)) 
     : html`<h2 id="no-character">Collection is empty, be the first to contribute</h2>`}
</section>`;

const characterTemplate = (character) => html`
<div class="character">
      <img src=${character.imageUrl} alt="example1" />
      <div class="character-info">
        <h3 class="type">${character.type}</h3>
        <span>Uploaded by </span>
        <p class="user-type">${character.userType}</p>
        <a class="details-btn" href="/catalog/${character._id}">Learn More</a>
      </div>
</div>`;

export async function showCatalogView() {
    const characters = await getAllCharacters();
    render(catalogTemplate(characters));
}
