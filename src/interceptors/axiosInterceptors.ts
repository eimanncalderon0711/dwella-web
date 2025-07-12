import axios from 'axios'
import AuthService from '../services/auth.service';


axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token')

        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },

    (error) => Promise.reject(error)
);


axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        
        const {refreshToken} = AuthService();

        if(error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            const getRefreshToken = localStorage.getItem('refresh_token');
            const renewToken = await refreshToken(getRefreshToken);
            localStorage.setItem('access_token', renewToken.access);

            originalRequest.headers['Authorization'] = `Bearer ${renewToken.access}`;
            return axios(originalRequest);
        }

        return Promise.reject(error);
    }
)