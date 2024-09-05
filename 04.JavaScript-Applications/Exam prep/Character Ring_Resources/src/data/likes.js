import { post } from '../data/api.js';

export async function likeCharacter(characterId) {
    return await post(`/data/likes`, { characterId });
}
