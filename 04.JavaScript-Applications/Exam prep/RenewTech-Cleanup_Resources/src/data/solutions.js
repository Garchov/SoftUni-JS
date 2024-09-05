import { get, post, put, del } from './api.js';

const endpoints = {
    solutions: '/data/solutions',
    solutionById: '/data/solutions/'
};

export async function getAllSolutions() {
    return get(`${endpoints.solutions}?sortBy=_createdOn%20desc`);
}

export async function getSolutionById(id) {
    return get(endpoints.solutionById + id);
}

export async function createSolution(data) {
    return post(endpoints.solutions, data);
}

export async function updateSolution(id, data) {
    return put(endpoints.solutionById + id, data);
}

export async function deleteSolution(id) {
    return del(endpoints.solutionById + id);
}
