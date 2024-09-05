
import { html, render } from '../lib.js';
import { getSearchResults } from '../data/shows.js';

const searchTemplate = (onSearch, results = [], hasSearched = false) => html`
<section id="search">
    <div class="form">
        <h2>Search</h2>
        <form @submit=${onSearch} class="search-form">
            <input type="text" name="search" id="search-input" placeholder="Enter TV show title" />
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
        ${hasSearched && results.length === 0 
            ? html`<p class="no-result">There is no TV show with this title.</p>` 
            : results.map(showCardTemplate)}
    </div>
</section>`;

const showCardTemplate = (show) => html`
<div class="show">
    <img src=${show.imageUrl} alt=${show.title} />
    <div class="show-info">
        <h3 class="title">${show.title}</h3>
        <p class="genre">Genre: ${show.genre}</p>
        <p class="country-of-origin">Country of Origin: ${show.country}</p>
        <a class="details-btn" href="/catalog/${show._id}" data-link>Details</a>
    </div>
</div>`;

export function showSearchView(ctx) {
    function onSearch(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get('search').trim();

        if (query) {
            getSearchResults(query).then(results => {
                render(searchTemplate(onSearch, results, true), document.getElementById('main-content'));
            });
        } else {
            alert('Please enter a search term');
        }
    }

    render(searchTemplate(onSearch), document.getElementById('main-content'));
}
