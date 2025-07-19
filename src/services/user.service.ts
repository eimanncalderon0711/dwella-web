import { USER_URLS } from '../api/endpoint'
import api from '../api/api';
import type { IServiceError } from '../interfaces/error-handlers/IServiceError';
import type { User } from '../models/User.model';

const UserService = () => {

    const {CREATE_USER, GET_USERS, GET_USER_BY_ID, UPDATE_USER_BY_ID, DELETE_USER_BY_ID} = USER_URLS;

    const getUsers = async () => {

        try {
            const response = await api.get(GET_USERS)
            return response.data;   
        } catch (error: any) {
             throw {
                status: error?.response?.status ?? null,
                data: error?.response?.data ?? null,
                message: error?.response?.data?.detail  || error?.message || "An unexpected error occurred",
            } as IServiceError;
        }
    }

    const createUser = async (data: any) => {
        const response = await api.post(CREATE_USER, data);

        return response.data;
    }

    const getUserById = async (id: number | string) => {
        const response = await api.get(GET_USER_BY_ID(id));
        return response.data;
    }

    const updateUserById = async (id: number | string, data: User) => {
        const response = await api.patch(UPDATE_USER_BY_ID(id), data);
        return response.data;
    }


    const deleteUserById = async (id: number | string) => {
        const response = await api.delete(DELETE_USER_BY_ID(id));
        return response.data;
    }

    return{
        createUser,
        getUsers,
        updateUserById,
        deleteUserById,
        getUserById
    }

}

export default UserService;