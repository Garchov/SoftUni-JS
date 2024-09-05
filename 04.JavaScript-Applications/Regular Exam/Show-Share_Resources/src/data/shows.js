import { get, post, put, del } from './api.js';

const endpoints = {
    catalog: '/data/shows?sortBy=_createdOn%20desc',
    shows: '/data/shows',
    showById: '/data/shows/'
}

export async function getAllShows() {
    return get(endpoints.catalog);
}

export async function getShowById(id) {
    return get(endpoints.showById + id);
}

export async function createShow({ title, imageUrl, genre, country, details }) {
    return post(endpoints.shows, {
        title,
        imageUrl,
        genre,
        country,
        details
    });
}

export async function updateShow(id, showData) {
    return put(endpoints.showById + id, showData);
}

export async function deleteShow(id) {
    return del(endpoints.showById + id);
}

export async function getSearchResults(query) {
    return get(`/data/shows?where=title%20LIKE%20%22${query}%22`);
}