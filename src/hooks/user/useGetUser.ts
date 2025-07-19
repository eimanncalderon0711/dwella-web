import type { User } from "../../models/User.model";
import UserService from "../../services/user.service"

export const useGetUser = async (id: any) => {

    const {getUserById} = UserService();

    try {
        const response: User = await getUserById(id);
        return response
    } catch (error) {
        console.log(error)
    }

}