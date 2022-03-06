import { newUserI, UserI, UserQuery } from "../interfaces/user.interface";
import authRepositorie from '../repositories/user';

async function query(email: string) {
 
}

async function addUser(user: newUserI): Promise<UserI> {
    const newUser = await authRepositorie.add(user);
    return newUser;
}

export default {
    query,
    addUser
}