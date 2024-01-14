import axios from "axios";

// export const API_URL = `https://watchify-server.onrender.com/api`;
// export const API_URL = `http://localhost:8080/api`;
// export const API_URL = `http://192.168.29.190:8080/api`;
// export const API_URL = `https://4913-2405-201-4033-d11e-54dc-5225-fea2-e798.ngrok-free.app/api`;

export const API_URL = process.env.EXPO_PUBLIC_API_URL;
console.log({ API_URL });

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default axiosInstance;
