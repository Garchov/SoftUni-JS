import { html, render } from '../lib.js';

const homeTemplate = () => html`
<section id="home">
  <h1>
    Dive into our world of cutting-edge technologies and out-of-the-box ideas designed to make Mother Nature smile again.
  </h1>
  <img id="home-img" src="./images/logo.png" alt="home-img" />
</section>`;

export function showHomeView() {
    render(homeTemplate());
}
