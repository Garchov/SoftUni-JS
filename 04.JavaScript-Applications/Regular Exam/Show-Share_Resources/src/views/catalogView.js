import { getAllShows } from '../data/shows.js';
import { html, render } from '../lib.js';

const catalogTemplate = (shows) => html`
<h2>Users Recommendations</h2>
  <section id="shows">
  ${shows ? shows.map(show => showTemplate(show)) : null}
  </section>
  ${shows.length === 0 ? html`<h2 id="no-show">No shows Added.</h2>` : null}`;

const showTemplate = (show) => html`
<div class="show">
      <img src=${show.imageUrl} alt="example1" />
      <div class="show-info">
        <h3 class="title">${show.title}</h3>
        <p class="genre">Genre: ${show.genre}</p>
        <p class="country-of-origin">Country of Origin: ${show.country}</p>
        <a class="details-btn" href="/catalog/${show._id}">Details</a>
      </div>
</div>`;

export async function showCatalogView() {
    const shows = await getAllShows();
    render(catalogTemplate(shows));
}
