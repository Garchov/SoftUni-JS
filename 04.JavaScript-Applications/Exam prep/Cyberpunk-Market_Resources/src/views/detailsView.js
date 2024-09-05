import { getItemById, deleteItem } from '../data/market.js';
import { html, render, page } from '../lib.js';
import { getUserData, hasOwner } from '../utils.js';

const detailsTemplate = (item, isOwner, onDelete) => html`
<section id="details">
  <div id="details-wrapper">
    <div>
      <img id="details-img" src=${item.imageUrl} alt="item" />
      <p id="details-title">${item.item}</p>
    </div>
    <div id="info-wrapper">
      <div id="details-description">
        <p class="details-price">Price: €${item.price}</p>
        <p class="details-availability">${item.availability}</p>
        <p class="type">Type: ${item.type}</p>
        <p id="item-description">${item.description}</p>
      </div>
      ${isOwner ? html`
      <div id="action-buttons">
        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
        <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
      </div>` : ''}
    </div>
  </div>
</section>`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    const isOwner = hasOwner(item._ownerId);
    render(detailsTemplate(item, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');
        if (!choice) return;

        await deleteItem(id);
        page.redirect('/catalog');
    }
}
