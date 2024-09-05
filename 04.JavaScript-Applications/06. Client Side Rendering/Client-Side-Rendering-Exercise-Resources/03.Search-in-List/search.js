import { towns } from "./towns.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById("towns");
const searchInputRef = document.getElementById("searchText");
document.querySelector("button").addEventListener("click", search);

search();

function search(e) {
  let searchText = '';
  if (e) {
    searchText = searchInputRef.value.trim().toLowerCase();
  }

  let matchCount = 0;
  let temps = towns.map(town => {
    let isMatch = town.toLowerCase().includes(searchText);
    if (isMatch) {
      matchCount++;
    }
    return createTemplate(town, isMatch);
  });

  render(html`<ul>${temps}</ul>`, root);
  document.getElementById("result").textContent = `${matchCount} ${matchCount === 1 ? 'matches found' : 'matches found'}`;
}

function createTemplate(town, isMatch) {
  return html`
    <li class=${isMatch ? "active" : ""}>${town}</li>
  `;
}