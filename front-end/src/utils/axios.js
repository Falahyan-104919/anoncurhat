import axios from 'axios';

const authState = JSON.parse(localStorage.getItem('authState')) || false;
const localhost = import.meta.env.VITE_VPS_ADDRESS;
const axiosInstance = axios.create({
  baseURL: `http://${localhost}:8888/`,
  headers: {
    Authorization: authState?.token,
  },
});

export default axiosInstance;
