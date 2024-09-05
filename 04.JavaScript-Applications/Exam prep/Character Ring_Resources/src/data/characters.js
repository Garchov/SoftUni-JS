import { get, post, put, del } from './api.js';

const endpoints = {
    catalog: '/data/characters?sortBy=_createdOn%20desc',
    characters: '/data/characters',
    characterById: (id) => `/data/characters/${id}`
};

export async function getAllCharacters() {
    return get(endpoints.catalog);
}

export async function getCharacterById(id) {
    return get(endpoints.characterById(id));
}

export async function createCharacter(characterData) {
    return post(endpoints.characters, characterData);
}

export async function updateCharacter(id, characterData) {
    return put(endpoints.characterById(id), characterData);
}

export async function deleteCharacter(id) {
    return del(endpoints.characterById(id));
}
