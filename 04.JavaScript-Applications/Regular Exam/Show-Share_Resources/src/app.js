import { page } from "./lib.js";
import { showHomeView } from "./views/homeView.js";
import { showCatalogView } from "./views/catalogView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";
import { updateNav } from "./utils.js";
import { logout } from "./data/user.js";
import { showCreateView } from "./views/createView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showSearchView } from "./views/searchView.js";

page('/', showHomeView);
page('/catalog', showCatalogView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/create', showCreateView);
page('/catalog/:id', showDetailsView);
page('/edit/:id', showEditView);
page('/search', showSearchView);

page.start();
updateNav();

document.querySelector('.logoutLink').addEventListener('click', () => {
    logout();
    updateNav();
    page.redirect('/');
});