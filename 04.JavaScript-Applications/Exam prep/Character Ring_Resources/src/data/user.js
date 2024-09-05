import { post, get } from './api.js';
import { setUserData , clearUserData } from '../utils.js';

export async function login(email, password) {
    const result = await post('/users/login', { email, password });
    setUserData(result);
    return result;
}

export async function register(email, password) {
    const result = await post('/users/register', { email, password });
    setUserData(result);
    return result;
}

export async function logout() {
    await get('/users/logout');
    clearUserData();
}
