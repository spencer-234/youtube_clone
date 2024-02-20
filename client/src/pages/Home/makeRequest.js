import axios from "axios";

export const makeRequest = axios.create({
    method: 'GET',
    baseURL: 'https://youtube138.p.rapidapi.com',
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
    }
});