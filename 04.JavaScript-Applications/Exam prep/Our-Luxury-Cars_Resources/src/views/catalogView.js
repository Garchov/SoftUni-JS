import { getAllCars } from '../data/cars.js';
import { html, render } from '../lib.js';

const catalogTemplate = (cars) => html`
<h2>Our Cars</h2>
<section id="dashboard">
    ${cars.length > 0 
        ? cars.map(carTemplate) 
        : html`<h3 class="nothing">Nothing to see yet</h3>`}
</section>`;

const carTemplate = (car) => html`
<div class="car">
    <img src="${car.imageUrl}" alt="${car.model}" />
    <h3 class="model">${car.model}</h3>
    <div class="specs">
        <p class="price">Price: €${car.price}</p>
        <p class="weight">Weight: ${car.weight} kg</p>
        <p class="top-speed">Top Speed: ${car.speed} kph</p>
    </div>
    <a class="details-btn" href="/catalog/${car._id}">More Info</a>
</div>`;

export async function showCatalogView() {
    const cars = await getAllCars();
    render(catalogTemplate(cars), document.querySelector('main'));
}