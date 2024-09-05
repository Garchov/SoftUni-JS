import { getSolutionById, updateSolution } from '../data/solutions.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const editTemplate = (solution, onSubmit) => html`
<section id="edit">
  <div class="form">
    <img class="border" src="./images/border.png" alt="" />
    <h2>Edit Solution</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input type="text" name="type" id="type" placeholder="Solution Type" .value=${solution.type} />
      <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${solution.imageUrl} />
      <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${solution.description}</textarea>
      <textarea id="more-info" name="learnMore" placeholder="more Info" rows="2" cols="10">${solution.learnMore}</textarea>
      <button type="submit">Edit</button>
    </form>
  </div>
</section>`;

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const solution = await getSolutionById(id);
    render(editTemplate(solution, createSubmitHandler(onSubmit)));
}

async function onSubmit({ type, 'image-url': imageUrl, description, learnMore }) {
    if (!type || !imageUrl || !description || !learnMore) {
        return alert('All fields are required!');
    }

    await updateSolution(id, { type, imageUrl, description, learnMore });
    page.redirect('/catalog/' + id);
}
