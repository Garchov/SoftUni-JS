import { html, render } from '../lib.js';

const homeTemplate = () => html`
<section id="home">
    <h1>Welcome to Our Luxury Cars</h1>
    <p>Discover and share luxury cars from around the world.</p>
</section>`;

export function showHomeView() {
    render(homeTemplate(), document.querySelector('main'));
}