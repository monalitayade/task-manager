import axios from 'axios';

const API = axios.create({
    baseURL:"http://localhost:5000/api/",
});

API.interceptors.request.use((req) => {
  const storedAuth = localStorage.getItem("authUser");
  if (storedAuth) {
    try {
      const { token } = JSON.parse(storedAuth);
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.error("Invalid auth data in localStorage", err);
    }
  }
  return req;
});

export default API;