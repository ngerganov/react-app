// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Запрос отправлен:', config);
    return config;
  },
  (error) => {
    console.error('Ошибка запроса:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Ответ получен:', response);
    return response;
  },
  (error) => {
    console.error('Ошибка ответа:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
