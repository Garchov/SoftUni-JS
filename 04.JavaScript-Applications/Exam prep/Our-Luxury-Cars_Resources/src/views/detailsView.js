// src/views/detailsView.js
import { getCarById, deleteCar } from '../data/cars.js';
import { html, render, page } from '../lib.js';
import { getUserData, hasOwner } from '../utils.js';  // Ensure hasOwner is correctly imported

const detailsTemplate = (car, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${car.imageUrl}" alt="${car.model}" />
        <p id="details-title">${car.model}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="price">Price: €${car.price}</p>
                <p class="weight">Weight: ${car.weight} kg</p>
                <p class="top-speed">Top Speed: ${car.speed} kph</p>
                <p id="car-description">${car.about}</p>
            </div>
            ${isOwner 
                ? html`<div id="action-buttons">
                          <a href="/edit/${car._id}" id="edit-btn">Edit</a>
                          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                       </div>` 
                : null}
        </div>
    </div>
</section>`;

export async function showDetailsView(ctx) {
    const carId = ctx.params.id;
    const car = await getCarById(carId);
    const isOwner = hasOwner(car._ownerId);

    render(detailsTemplate(car, isOwner, onDelete), document.querySelector('main'));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this car?');
        if (choice) {
            await deleteCar(carId);
            page.redirect('/catalog');
        }
    }
}
