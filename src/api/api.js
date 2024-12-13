import axios from 'axios';

const api = axios.create({
    baseURL: 'https://shopflow-api-f6jh.onrender.com/api', // URL base de la API
});

export default api;
