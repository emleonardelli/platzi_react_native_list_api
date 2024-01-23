import {API_HOST} from '../utils/constants.js';

export const getPokemonsApi = async (nextUrl) => {
    try {
        const url = nextUrl || `${API_HOST}/pokemon?limit=20&offset=0`;
        const query = await fetch(url);
        const res = await query.json();
        return res;
    } catch (error) {
        throw error;
    }
}

export const getPokemonDetailsByUrlApi = async (url) => {
    try {
        const query = await fetch(url);
        const res = await query.json();
        return res;
    } catch (error) {
        throw error;
    }
}

export const getPokemonDetailsByIdApi = async (id) => {
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const query = await fetch(url);
        const res = await query.json();
        return res;
    } catch (error) {
        throw error;
    }
}