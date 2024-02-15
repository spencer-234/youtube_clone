export const homeRequest = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/home/',
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
    }
};