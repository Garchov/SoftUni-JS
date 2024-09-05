import { getCarById, updateCar } from '../data/cars.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const editTemplate = (car, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Your Car</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="model" id="model" placeholder="Model" .value="${car.model}" />
            <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" .value="${car.imageUrl}" />
            <input type="text" name="price" id="price" placeholder="Price in Euro" .value="${car.price}" />
            <input type="number" name="weight" id="weight" placeholder="Weight in Kg" .value="${car.weight}" />
            <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" .value="${car.speed}" />
            <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50">${car.about}</textarea>
            <button type="submit">Edit</button>
        </form>
    </div>
</section>`;

export async function showEditView(ctx) {
    const carId = ctx.params.id;
    const car = await getCarById(carId);

    render(editTemplate(car, createSubmitHandler(onSubmit)), document.querySelector('main'));

    async function onSubmit(data) {
        if (Object.values(data).some(v => v.trim() === '')) {
            return alert('All fields are required!');
        }
        await updateCar(carId, data);
        page.redirect(`/catalog/${carId}`);
    }
}