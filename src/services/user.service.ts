import axios from 'axios'
import { USER_URLS } from '../api/endpoint'

const UserService = (token: string) => {

    const {CREATE_USER, GET_USERS, GET_USER_BY_ID, UPDATE_USER_BY_ID, DELETE_USER_BY_ID} = USER_URLS;

    const getUsers = async () => {
        const response = await axios.get(GET_USERS, {
            headers:{
                Authorization: `Bearer ${token}`
            },
        });

        return response.data;
    }

    const createUser = async (data: any) => {
        const response = await axios.post(CREATE_USER, data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    }

    const getUserById = async (id: string) => {
        const response = await axios.get(GET_USER_BY_ID(id), {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    }

    const updateUserById = async (id: string, data: any) => {
        const response = await axios.put(UPDATE_USER_BY_ID(id), data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    }


    const deleteUserById = async (id: string) => {
        const response = await axios.delete(DELETE_USER_BY_ID(id), {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

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