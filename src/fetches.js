import fetch from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://frozen-escarpment-09808.herokuapp.com/';

export async function fetchTrees() {
    try {
        const response = await fetch.get(`${URL}trees`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function fetchTree(someId) {
    try {
        const response = await fetch.get(`${URL}trees/${someId}`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function fetchTypes() {
    try {
        const response = await fetch.get(`${URL}types/`);

        return response.body;
    } catch (err) {
        throw err;
    }
}


export async function createTree(newTree) {
    try {
        await fetch
            .post(`${URL}trees`)
            .send(newTree);

        return;
    } catch (err) {
        throw err;
    }
}

export async function updateTree(someId, newTree) {
    try {
        await fetch
            .put(`${URL}trees/${someId}`)
            .send(newTree);

        return;
    } catch (err) {
        throw err;
    }
}

export async function deleteTree(someId) {
    try {
        await fetch.delete(`${URL}trees/${someId}`);

        return;
    } catch (err) {
        throw err;
    }
}