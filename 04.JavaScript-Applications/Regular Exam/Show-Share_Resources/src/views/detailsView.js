import { deleteShow, getShowById } from '../data/shows.js';
import { html, render, page } from '../lib.js';
import { hasOwner } from '../utils.js';

const detailsTemplate = (data, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${data.imageUrl} alt="example1" />
      <div id="details-text">
        <p id="details-title">${data.title}</p>
        <div id="info-wrapper">
          <div id="description">
            <p id="details-description">
              ${data.details}
            </p>
          </div>
        </div>
    
        ${isOwner ? html`
            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" data-id=${data._id} id="delete-btn">Delete</a>
                </div>
        ` : null}
      </div>
    </div>
</section>`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const data = await getShowById(id);
    const isOwner = hasOwner(data._ownerId);

    render(detailsTemplate(data, isOwner));
}

async function onDelete(e) {
    e.preventDefault();

    const id = e.target.dataset.id;

    const choice = confirm('Are you sure?');

    if (!choice) {
        return;
    }

    await deleteShow(id);
    page.redirect('/catalog');
}