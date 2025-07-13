import axios from "axios"
import { AUTH_URLS } from "../api/endpoint"

const AuthService = () => {

    const login = async (username: string, password: string) => {

        const response = await axios.post(AUTH_URLS.LOGIN, {
            username,
            password
        });
        
        return response.data;
        
    }

    const refreshToken = async (refresh_token: string | null) => {
        const response = await axios.post(AUTH_URLS.REFRESH_TOKEN, {
            refresh: refresh_token
        });

        return response.data;
    }

    return {
        login,
        refreshToken
    }
}

export default AuthService;