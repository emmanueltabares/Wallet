import { newUserI, UserI } from '../interfaces/user.interface';
import { userModel } from '../models/user';

async function query(query: any): Promise<UserI> {
    const result = await userModel.find(query);
    return result[0];
  }
async function add(user: newUserI): Promise<UserI> {
    const newUser = new userModel(user);
    await newUser.save();
    return newUser;
}

async function get(id: string) {
    return await userModel.findById(id)
}

export default {
    query,
    add,
    get
}