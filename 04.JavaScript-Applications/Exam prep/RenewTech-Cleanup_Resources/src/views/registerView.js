import { register } from '../data/user.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler, updateNav } from '../utils.js';

const registerTemplate = (onSubmit) => html`
<section id="register">
  <div class="form">
    <img class="border" src="./images/border.png" alt="" />
    <h2>Register</h2>
    <form @submit=${onSubmit} class="register-form">
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input type="password" name="password" id="register-password" placeholder="password" />
      <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export function showRegisterView() {
    render(registerTemplate(createSubmitHandler(onSubmit)));
}

async function onSubmit({ email, password, 're-password': repassword }) {
    if (!email || !password) {
        return alert('All fields are required!');
    }

    if (repassword !== password) {
        return alert('Passwords don\'t match!');
    }

    await register(email, password);
    updateNav();
    page.redirect('/');
}