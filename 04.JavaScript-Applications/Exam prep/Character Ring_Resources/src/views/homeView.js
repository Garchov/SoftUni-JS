import { html, render } from '../lib.js';

const homeTemplate = () => html`
<section id="home">
    <div id="home-wrapper">
        <h1>Welcome to Character Ring</h1>
        <img src="./images/home-image.jpg" alt="Home Image">
    </div>
</section>`;

export function showHomeView() {
    render(homeTemplate(), document.querySelector('main'));
}
