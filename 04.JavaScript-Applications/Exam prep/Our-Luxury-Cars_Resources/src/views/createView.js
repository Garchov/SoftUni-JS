import { createCar } from '../data/cars.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Share Your Car</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="model" id="model" placeholder="Model" />
            <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" />
            <input type="text" name="price" id="price" placeholder="Price in Euro" />
            <input type="number" name="weight" id="weight" placeholder="Weight in Kg" />
            <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" />
            <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50"></textarea>
            <button type="submit">Add</button>
        </form>
    </div>
</section>`;

export function showCreateView() {
    render(createTemplate(createSubmitHandler(onSubmit)), document.querySelector('main'));

    async function onSubmit(data) {
        if (Object.values(data).some(v => v.trim() === '')) {
            return alert('All fields are required!');
        }
        await createCar(data);
        page.redirect('/catalog');
    }
}