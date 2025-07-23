import { useEffect, useState } from "react";
import UserService from "../../services/user.service"
import type { User } from "../../models/User.model";
import type { IServiceError } from "../../interfaces/error-handlers/IServiceError";


export const useGetUsers = () => {
    const {getUsers} = UserService();

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const fetchUsers = async () => {
        
        try {
            const response = await getUsers()
            setUsers(response.data);
        } 
        catch (error: any) {
            const err = error as IServiceError
            if(err.status !== 200) setError('Server Error')
        } 
        finally {
            setLoading(false);
        }
    };

    fetchUsers();
    }, []);

    return { users, loading, error }
}