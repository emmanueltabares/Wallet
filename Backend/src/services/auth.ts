import { newUserI, UserI } from "../interfaces/user.interface";
import walletService from './wallet';
import authRepositorie from '../repositories/user';

async function query(email: string) {
    const query = await authRepositorie.query({email})
    return query;
}

async function addUser(user: newUserI): Promise<UserI> {
    const newUser = await authRepositorie.add(user);
    await walletService.create(newUser._id.toString())
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