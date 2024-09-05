import { get, post, put, del } from './api.js';

const endpoints = {
    items: '/data/cyberpunk',
    itemById: '/data/cyberpunk/'
};

export async function getAllItems() {
    return get(`${endpoints.items}?sortBy=_createdOn%20desc`);
}

export async function getItemById(id) {
    return get(endpoints.itemById + id);
}

export async function createItem(data) {
    return post(endpoints.items, data);
}

export async function updateItem(id, data) {
    return put(endpoints.itemById + id, data);
}

export async function deleteItem(id) {
    return del(endpoints.itemById + id);
}
