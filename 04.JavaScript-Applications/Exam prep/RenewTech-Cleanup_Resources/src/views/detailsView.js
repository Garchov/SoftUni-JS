import { getSolutionById, deleteSolution } from '../data/solutions.js';
import { getLikesBySolutionId, likeSolution } from '../data/likes.js';
import { html, render, page } from '../lib.js';
import { getUserData, hasOwner } from '../utils.js';

const detailsTemplate = (solution, likes, hasUser, hasLiked, isOwner, onLike, onDelete) => html`
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${solution.imageUrl} alt="example1" />
    <div>
      <p id="details-type">${solution.type}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${solution.description}</p>
          <p id="more-info">${solution.learnMore}</p>
        </div>
      </div>
      <h3>Like Solution:<span id="like">${likes}</span></h3>

      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        ${isOwner ? html`
        <a href="/edit/${solution._id}" id="edit-btn">Edit</a>
        <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>` : ''}
        ${hasUser && !isOwner && !hasLiked ? html`
        <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>` : ''}
      </div>
    </div>
  </div>
</section>`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    const [solution, likesInfo] = await Promise.all([
        getSolutionById(id),
        getLikesBySolutionId(id)
    ]);

    const isOwner = hasOwner(solution._ownerId);
    const hasLiked = likesInfo.hasLiked || isOwner;
    const userData = await getUserData();

    render(detailsTemplate(solution, likesInfo.likes, Boolean(userData), hasLiked, isOwner, onLike, onDelete));

    async function onLike() {
        await likeSolution(id);
        page.redirect('/catalog/' + id);
    }

    async function onDelete() {
        const choice = confirm('Are you sure?');
        if (!choice) return;
        await deleteSolution(id);
        page.redirect('/catalog');
    }
}
