import { newUserI, UserI, UserQuery } from "../interfaces/user.interface";
import authRepositorie from '../repositories/user';

async function query(email: string) {
    const query = await authRepositorie.query({email})
    return query;
}

async function addUser(user: newUserI): Promise<UserI> {
    const newUser = await authRepositorie.add(user);
    return newUser;
}

async function getUser(id: string) {
    const user = await authRepositorie.get(id);
    return user;
}

export default {
    query,
    addUser,
    getUser
}