import { newUserI, UserI } from '../interfaces/user.interface';
import { userModel } from '../models/user';

async function query(email: string) {

}

async function add(user: newUserI): Promise<UserI> {
    const newUser = new userModel(user);
    await newUser.save();
    return newUser;
}

export default {
    query,
    add
}