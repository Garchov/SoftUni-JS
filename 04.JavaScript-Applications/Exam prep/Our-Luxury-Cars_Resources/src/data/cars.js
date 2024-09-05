import { get, post, put, del } from './api.js';

const endpoints = {
    cars: '/data/cars',
    carById: (id) => `/data/cars/${id}`,
};

export async function getAllCars() {
    return get(`${endpoints.cars}?sortBy=_createdOn%20desc`);
}

export async function getCarById(id) {
    return get(endpoints.carById(id));
}

export async function createCar(data) {
    return post(endpoints.cars, data);
}

export async function updateCar(id, data) {
    return put(endpoints.carById(id), data);
}

export async function deleteCar(id) {
    return del(endpoints.carById(id));
}